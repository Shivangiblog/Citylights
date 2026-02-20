"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindingWithPosition = exports.ParagraphFinding = exports.HeaderFinding = exports.Finding = exports.HeaderItem = exports.ResultsTreeItem = void 0;
const vscode_1 = require("vscode");
const errors_1 = require("./analyzer/errors");
const analyzer_1 = require("./analyzer");
const path = require("path");
class TreeProvider {
    constructor() {
        this._onDidChangeTreeData = new vscode_1.EventEmitter();
        this.onDidChangeTreeData = this._onDidChangeTreeData.event;
        this.results = [];
    }
    refresh() {
        this.analyze();
        this._onDidChangeTreeData.fire();
    }
    getTreeItem(element) {
        return element;
    }
    getChildren(element) {
        if (!element) {
            const frontmatter = new HeaderItem('Frontmatter', this, vscode_1.TreeItemCollapsibleState.Expanded);
            const body = new HeaderItem('Body', this, vscode_1.TreeItemCollapsibleState.Expanded);
            return Promise.resolve([frontmatter, body]);
        }
        else if (element.label === 'Frontmatter') {
            return Promise.resolve(this.results.filter(r => r.resultType === errors_1.ResultType.frontmatter).map(result => {
                return new Finding(result.title, result.message, this, vscode_1.TreeItemCollapsibleState.None);
            }));
        }
        else if (element.label === 'Body') {
            return Promise.resolve(this.generateBodyErrors());
        }
        else if (element.label === 'Paragraph') {
            return Promise.resolve(this.generateParagraphErrors(element));
        }
        else if (element.label === 'Header') {
            return Promise.resolve(this.generateHeaderErrors(element));
        }
        else {
            return Promise.resolve([]);
        }
    }
    generateHeaderErrors(element) {
        const startLocationToString = (loc) => (`Line:Column ${element.header.loc.start.line}:${element.header.loc.start.column}`);
        const endLocationToString = (loc) => (`Line:Column ${element.header.loc.end.line}:${element.header.loc.end.column}`);
        return [
            new FindingWithPosition("Start", startLocationToString(element.header.loc), element.header.loc, this, vscode_1.TreeItemCollapsibleState.None),
            new FindingWithPosition("End", endLocationToString(element.header.loc), element.header.loc, this, vscode_1.TreeItemCollapsibleState.None)
        ];
    }
    generateParagraphErrors(element) {
        const startLocationToString = (loc) => (`Line:Column ${element.paragraph.loc.start.line}:${element.paragraph.loc.start.column}`);
        const endLocationToString = (loc) => (`Line:Column ${element.paragraph.loc.end.line}:${element.paragraph.loc.end.column}`);
        return [
            new FindingWithPosition("Start", startLocationToString(element.paragraph.loc), element.paragraph.loc, this, vscode_1.TreeItemCollapsibleState.None),
            new FindingWithPosition("End", endLocationToString(element.paragraph.loc), element.paragraph.loc, this, vscode_1.TreeItemCollapsibleState.None)
        ];
    }
    generateBodyErrors() {
        return this.results.filter(r => r.resultType === errors_1.ResultType.body).map(result => {
            return this.generateBodyError(result);
        });
    }
    generateBodyError(result) {
        if (result instanceof errors_1.ParagraphError) {
            return new ParagraphFinding(result.title, result.message, result, this, vscode_1.TreeItemCollapsibleState.Collapsed);
        }
        else if (result instanceof errors_1.HeaderError) {
            return new HeaderFinding(result.title, result.message, result, this, vscode_1.TreeItemCollapsibleState.Collapsed);
        }
        else {
            return new Finding(result.title, result.message, this, vscode_1.TreeItemCollapsibleState.None);
        }
    }
    static get titleAttribute() {
        const configuration = vscode_1.workspace.getConfiguration('betterseo');
        const title = configuration.get('frontmatter.titleAttribute');
        return title;
    }
    static get seoTitleAttribute() {
        const configuration = vscode_1.workspace.getConfiguration('betterseo');
        const seoTitle = configuration.get('frontmatter.seoTitleAttribute');
        return seoTitle;
    }
    static get seoDescriptionAttribute() {
        const configuration = vscode_1.workspace.getConfiguration('betterseo');
        const seoDescription = configuration.get('frontmatter.seoDescriptionAttribute');
        return seoDescription;
    }
    analyze() {
        var _a, _b;
        const fileNameSplit = (_a = vscode_1.window.activeTextEditor) === null || _a === void 0 ? void 0 : _a.document.fileName.split('.');
        const fileExtension = fileNameSplit === null || fileNameSplit === void 0 ? void 0 : fileNameSplit[fileNameSplit.length - 1];
        if (fileExtension && !['md', 'mdx'].includes(fileExtension)) {
            vscode_1.window.showErrorMessage("Better SEO: Current file is not a Markdown file");
            return;
        }
        const currentFile = (_b = vscode_1.window.activeTextEditor) === null || _b === void 0 ? void 0 : _b.document.getText();
        if (!currentFile) {
            return;
        }
        const markdownFile = currentFile.toString();
        const frontmatterConfig = {
            titleField: TreeProvider.titleAttribute,
            seoTitleField: TreeProvider.seoTitleAttribute,
            seoDescriptionField: TreeProvider.seoDescriptionAttribute
        };
        this.results = analyzer_1.runAnalysis(markdownFile, frontmatterConfig);
    }
}
exports.default = TreeProvider;
class ResultsTreeItem extends vscode_1.TreeItem {
    constructor(label, provider, collapsibleState) {
        super(label, collapsibleState);
        this.label = label;
        this.provider = provider;
        this.collapsibleState = collapsibleState;
    }
}
exports.ResultsTreeItem = ResultsTreeItem;
class HeaderItem extends ResultsTreeItem {
    constructor() {
        super(...arguments);
        this.iconPath = {
            light: path.join(__filename, '..', '..', 'resources', 'betterseo-view-icon-light.svg'),
            dark: path.join(__filename, '..', '..', 'resources', 'betterseo-view-icon-light.svg')
        };
    }
}
exports.HeaderItem = HeaderItem;
class Finding extends ResultsTreeItem {
    constructor(label, description, provider, collapsibleState) {
        super(label, provider, collapsibleState);
        this.label = label;
        this.description = description;
        this.provider = provider;
        this.collapsibleState = collapsibleState;
        this.iconPath = {
            light: path.join(__filename, '..', '..', 'resources', 'light', 'error icon.svg'),
            dark: path.join(__filename, '..', '..', 'resources', 'dark', 'error icon.svg')
        };
    }
}
exports.Finding = Finding;
class HeaderFinding extends Finding {
    constructor(label, description, header, provider, collapsibleState) {
        super(label, description, provider, collapsibleState);
        this.label = label;
        this.description = description;
        this.header = header;
        this.provider = provider;
        this.collapsibleState = collapsibleState;
    }
}
exports.HeaderFinding = HeaderFinding;
class ParagraphFinding extends Finding {
    constructor(label, description, paragraph, provider, collapsibleState) {
        super(label, description, provider, collapsibleState);
        this.label = label;
        this.description = description;
        this.paragraph = paragraph;
        this.provider = provider;
        this.collapsibleState = collapsibleState;
    }
}
exports.ParagraphFinding = ParagraphFinding;
class FindingWithPosition extends Finding {
    constructor(label, description, location, provider, collapsibleState) {
        super(label, description, provider, collapsibleState);
        this.label = label;
        this.description = description;
        this.location = location;
        this.provider = provider;
        this.collapsibleState = collapsibleState;
        this.iconPath = {
            light: path.join(__filename, '..', '..', 'resources', 'light', 'text-icon-light.svg'),
            dark: path.join(__filename, '..', '..', 'resources', 'dark', 'text-icon-dark.svg')
        };
    }
}
exports.FindingWithPosition = FindingWithPosition;
//# sourceMappingURL=treeProvider.js.map
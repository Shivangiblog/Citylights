"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAnalysis = exports.extractKeywords = void 0;
const matter = require("gray-matter");
const markdownToAst = require("@textlint/markdown-to-ast");
const errors_1 = require("./errors");
const title_1 = require("./title");
const frontmatter_1 = require("./frontmatter");
function extractKeywords(currentFile) {
    const frontmatter = matter(currentFile);
    const keywords = frontmatter.data['keywords'] || frontmatter.data['Keywords'];
    if (!keywords) {
        return [];
    }
    return keywords;
}
exports.extractKeywords = extractKeywords;
function runAnalysis(markdownFile, configuration) {
    const keywords = extractKeywords(markdownFile);
    return analyze(markdownFile, keywords, configuration).concat(frontmatter_1.analyzeFrontmatter(markdownFile, configuration, keywords));
}
exports.runAnalysis = runAnalysis;
function validateFirstParagraph(children, keyword) {
    var _a;
    const analyzerResults = [];
    let firstParagraph = children.find(child => child.type === 'Paragraph');
    let text = (_a = firstParagraph === null || firstParagraph === void 0 ? void 0 : firstParagraph.children) === null || _a === void 0 ? void 0 : _a.find(child => child.type === 'Str');
    if (!text) {
        analyzerResults.push(new errors_1.AnalyzerError('First Paragraph', 'Not found', errors_1.ResultType.body));
    }
    if (text && text.value.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
        analyzerResults.push(new errors_1.AnalyzerError('First Paragraph', `Keyword ${keyword} not found`, errors_1.ResultType.body));
    }
    return analyzerResults;
}
function validateParagraphLength(children) {
    const paragraphs = children.filter(child => child.type === 'Paragraph');
    const longParagraphErrors = paragraphs.filter(paragraph => {
        return paragraph.raw
            .split(/\s+/)
            .length >= 200;
    })
        .map((paragraph) => {
        return new errors_1.ParagraphError('Paragraph', paragraph.loc, `Paragraph starting with ${paragraph.raw.substr(0, 20)} has more than 200 characters(${paragraph.raw.length}). Consider breaking it up`, errors_1.ResultType.body);
    });
    return longParagraphErrors;
}
function validateArticleLength(children) {
    const paragraphs = children.filter(child => child.type === 'Paragraph')
        .filter(child => child.children)
        .flatMap(child => { var _a; return (_a = child.children) === null || _a === void 0 ? void 0 : _a.filter(grandChild => grandChild.type === 'Str'); });
    const totalLength = paragraphs.flatMap(textElement => textElement ? textElement.raw.split(/\s+/) : [])
        .reduce((acc, _currentValue) => acc + 1, 0);
    if (totalLength < 300) {
        return [
            new errors_1.AnalyzerError('Article Length', `Article is too short. Expected: At least 300 Characters. Actual Length: ${totalLength}`, errors_1.ResultType.body)
        ];
    }
    return [];
}
function analyze(markdownFile, keywords, configuration) {
    const AST = markdownToAst.parse(markdownFile);
    const children = AST.children;
    return [
        title_1.validateHeaderStructure(children),
        title_1.validateTitle(markdownFile, children, keywords, configuration),
        keywords.flatMap(keyword => validateFirstParagraph(children, keyword)),
        validateParagraphLength(children),
        validateArticleLength(children)
    ].flat();
}
//# sourceMappingURL=index.js.map
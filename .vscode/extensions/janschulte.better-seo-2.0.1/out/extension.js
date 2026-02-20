"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const treeProvider_1 = require("./treeProvider");
function moveCursor(firstSelection) {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
        return;
    }
    const position = editor.selection.active;
    const startLine = firstSelection.location.start.line === 0 ? 0 : firstSelection.location.start.line - 1;
    const newPosition = position.with(startLine, firstSelection.location.start.column);
    const newSelection = new vscode.Selection(newPosition, newPosition);
    editor.selection = newSelection;
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    const seoResultTreeProvider = new treeProvider_1.default();
    const treeView = vscode.window.createTreeView('seo-results', {
        treeDataProvider: seoResultTreeProvider
    });
    treeView.onDidChangeSelection((event) => {
        console.log(event instanceof treeProvider_1.FindingWithPosition);
        if (event.selection.length === 0) {
            return;
        }
        const firstSelection = event.selection[0];
        if (firstSelection instanceof treeProvider_1.FindingWithPosition) {
            moveCursor(firstSelection);
        }
    });
    let disposable = vscode.commands.registerCommand('better-seo.refresh', () => {
        seoResultTreeProvider.refresh();
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map
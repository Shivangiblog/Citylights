"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderError = exports.ParagraphError = exports.AnalyzerError = exports.AnalyzerResult = exports.ResultType = void 0;
var ResultType;
(function (ResultType) {
    ResultType[ResultType["frontmatter"] = 0] = "frontmatter";
    ResultType[ResultType["body"] = 1] = "body";
})(ResultType = exports.ResultType || (exports.ResultType = {}));
class AnalyzerResult {
    constructor(title, message, resultType) {
        this.title = title;
        this.message = message;
        this.resultType = resultType;
    }
}
exports.AnalyzerResult = AnalyzerResult;
class AnalyzerError extends AnalyzerResult {
    constructor(title, message, resultType) {
        super(title, message, resultType);
        this.title = title;
        this.message = message;
        this.resultType = resultType;
    }
}
exports.AnalyzerError = AnalyzerError;
class ParagraphError extends AnalyzerError {
    constructor(title, loc, message, resultType) {
        super(title, message, resultType);
        this.title = title;
        this.loc = loc;
        this.message = message;
        this.resultType = resultType;
    }
}
exports.ParagraphError = ParagraphError;
class HeaderError extends AnalyzerError {
    constructor(title, loc, message, resultType) {
        super(title, message, resultType);
        this.title = title;
        this.loc = loc;
        this.message = message;
        this.resultType = resultType;
    }
}
exports.HeaderError = HeaderError;
//# sourceMappingURL=errors.js.map
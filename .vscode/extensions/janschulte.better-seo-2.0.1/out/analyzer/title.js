"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTitle = exports.validateHeaderStructure = void 0;
const matter = require("gray-matter");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
function validateHeaderStructure(children) {
    const firstLevelHeadlines = children.filter(child => child.type === 'Header' && child.depth === 1);
    if (firstLevelHeadlines.length > 1) {
        return firstLevelHeadlines.map(firstLevelHeadline => {
            return new errors_1.HeaderError('Header', firstLevelHeadline.loc, 'Inconsistent Header Structure. Only one first level Header allowed.', errors_1.ResultType.body);
        });
    }
    return [];
}
exports.validateHeaderStructure = validateHeaderStructure;
function analyzeTitleForRemainingKeywords(keywords, header) {
    const foundKeywords = keywords.slice(1).filter(keyword => header.indexOf(keyword) !== -1);
    if (foundKeywords.length > 0) {
        return new errors_1.AnalyzerError('Article Title', 'Article Title should only include the top keyword', errors_1.ResultType.body);
    }
    return null;
}
function isTitlePresent(markdownFile, children) {
    let header = children.find(child => child.type === 'Header' && child.depth === 1);
    if (!header) {
        const frontmatter = matter(markdownFile);
        return !!frontmatter.data['title'];
    }
    return true;
}
function hasDuplicateTitle(markdownFile, children, frontmatterConfiguration) {
    const frontmatter = matter(markdownFile);
    let firstLevelHeadline = children.find(child => child.type === 'Header' && child.depth === 1);
    const frontmatterTitle = frontmatter.data[frontmatterConfiguration.titleField];
    return firstLevelHeadline && frontmatterTitle;
}
function getHeader(markdownFile, children, frontmatterConfiguration) {
    var _a;
    const frontmatter = matter(markdownFile);
    if (frontmatter.data[frontmatterConfiguration.titleField]) {
        return frontmatter.data[frontmatterConfiguration.titleField];
    }
    return (_a = children.find(child => child.type === 'Header' && child.depth === 1)) === null || _a === void 0 ? void 0 : _a.raw;
}
function validateTitle(markdownFile, children, keywords, frontmatterConfiguration) {
    const analyzerResults = [];
    if (!isTitlePresent(markdownFile, children)) {
        analyzerResults.push(new errors_1.AnalyzerError('Article Title', 'Not found', errors_1.ResultType.body));
    }
    if (hasDuplicateTitle(markdownFile, children, frontmatterConfiguration)) {
        analyzerResults.push(new errors_1.AnalyzerError('Article Title', 'Found title in First-Level Headline and Frontmatter', errors_1.ResultType.body));
    }
    const header = getHeader(markdownFile, children, frontmatterConfiguration);
    if (header && keywords[0] && header.indexOf(keywords[0]) === -1) {
        if (!utils_1.doesKeywordPartialMatch(keywords[0], header)) {
            analyzerResults.push(new errors_1.AnalyzerError('Article Title', `Keyword ${keywords[0]} not found`, errors_1.ResultType.body));
        }
    }
    if (header) {
        const analyzerResult = analyzeTitleForRemainingKeywords(keywords, header);
        if (analyzerResult) {
            analyzerResults.push(analyzerResult);
        }
    }
    return analyzerResults;
}
exports.validateTitle = validateTitle;
//# sourceMappingURL=title.js.map
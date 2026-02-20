"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeFrontmatter = void 0;
const matter = require("gray-matter");
const errors_1 = require("./errors");
const utils_1 = require("./utils");
function analyzeFrontmatter(markdownFile, configuration, keywords) {
    const frontmatter = matter(markdownFile);
    const seoTitle = frontmatter.data[configuration.seoTitleField];
    const seoDescription = frontmatter.data[configuration.seoDescriptionField];
    let results = [];
    if (!seoDescription) {
        results.push(new errors_1.AnalyzerError(configuration.seoDescriptionField, 'Field not found', errors_1.ResultType.frontmatter));
    }
    else {
        results = results.concat(firstKeywordMultipleSeoDescriptionOccurrences(configuration, seoDescription, keywords[0]));
        if (keywords.length === 1) {
            results = results.concat(validateSeoDescription(configuration, seoDescription, keywords[0]));
        }
        else if (keywords.length >= 2) {
            results = results.concat(validateSeoDescription(configuration, seoDescription, keywords[0]));
            results = results.concat(validateSeoDescription(configuration, seoDescription, keywords[1]));
        }
        if (keywords.length >= 3) {
            results = results.concat(validateSeoDescriptionWithAllKeywords(configuration, seoDescription, keywords));
        }
    }
    if (!seoTitle) {
        results.push(new errors_1.AnalyzerError(configuration.seoTitleField, 'Field not found', errors_1.ResultType.frontmatter));
    }
    else {
        if (keywords.length >= 1) {
            const titleError = validateSeoTitle(configuration, seoTitle, keywords[0]);
            if (titleError && !utils_1.doesKeywordPartialMatch(keywords[0], seoTitle)) {
                results = results.concat(titleError);
            }
        }
        if (keywords.length >= 3) {
            results = results.concat(validateSeoTitleWithAllKeywords(configuration, seoTitle, keywords));
        }
    }
    return results;
}
exports.analyzeFrontmatter = analyzeFrontmatter;
function firstKeywordMultipleSeoDescriptionOccurrences(configuration, seoDescription, firstKeyword) {
    const regex = new RegExp(`${firstKeyword}+`, 'ig');
    if ((seoDescription.match(regex) || []).length > 1) {
        return [
            new errors_1.AnalyzerError(configuration.seoDescriptionField, 'Should not contain primary keyword more than once', errors_1.ResultType.frontmatter)
        ];
    }
    return [];
}
function validateSeoDescriptionWithAllKeywords(configuration, seoDescription, keywords) {
    const foundKeyWords = keywords.slice(2)
        .filter(keyword => seoDescription.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    if (foundKeyWords.length === keywords.slice(2).length) {
        return [
            new errors_1.AnalyzerError(configuration.seoDescriptionField, 'SEO Description should not contain more than the primary and secondary keyword', errors_1.ResultType.frontmatter)
        ];
    }
    return [];
}
function validateSeoDescription(configuration, seoDescription, keyword) {
    const results = [];
    if (seoDescription && seoDescription.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
        results.push(new errors_1.AnalyzerError(configuration.seoDescriptionField, `Keyword '${keyword}' not found`, errors_1.ResultType.frontmatter));
    }
    if (seoDescription && seoDescription.length > 160) {
        results.push(new errors_1.AnalyzerError(configuration.seoDescriptionField, 'SEO Description should 160 characters max.', errors_1.ResultType.frontmatter));
    }
    return results;
}
function validateSeoTitleWithAllKeywords(configuration, seoTitle, keywords) {
    const foundKeywords = keywords.filter(keyword => {
        return seoTitle.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });
    if (foundKeywords.length === keywords.length) {
        return [
            new errors_1.AnalyzerError(configuration.seoTitleField, 'SEO Title should only include two keywords maximum', errors_1.ResultType.frontmatter)
        ];
    }
    return [];
}
function validateSeoTitle(configuration, seoTitle, keyword) {
    const results = [];
    if (seoTitle && seoTitle.toLowerCase().indexOf(keyword.toLowerCase()) === -1) {
        results.push(new errors_1.AnalyzerError(configuration.seoTitleField, `Keyword '${keyword}' not found`, errors_1.ResultType.frontmatter));
    }
    if (seoTitle && seoTitle.length > 60) {
        results.push(new errors_1.AnalyzerError(configuration.seoTitleField, 'SEO Title should have 60 Characters max.', errors_1.ResultType.frontmatter));
    }
    return results;
}
//# sourceMappingURL=frontmatter.js.map
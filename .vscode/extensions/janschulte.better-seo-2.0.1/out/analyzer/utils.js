"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doesKeywordPartialMatch = void 0;
function doesKeywordPartialMatch(keyword, fieldValue) {
    if (!keyword) {
        return false;
    }
    const splittedKeyword = keyword.split(' ');
    const foundWordResults = [];
    for (let i = 0; i < splittedKeyword.length; i++) {
        const currentKeywordPartial = splittedKeyword[i].toLowerCase();
        foundWordResults.push(fieldValue.toLowerCase().indexOf(currentKeywordPartial) !== -1);
    }
    return foundWordResults.every(value => value === true);
}
exports.doesKeywordPartialMatch = doesKeywordPartialMatch;
//# sourceMappingURL=utils.js.map
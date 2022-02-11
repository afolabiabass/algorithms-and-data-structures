/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let canBreak = false
    wordDict.forEach((word) => {
        if (s.includes(word)) {
            canBreak = wordBreak(s.replace(word, ''), wordDict)
        }
    })
    
    if (s == '') {
        return true;
    }
    
    return canBreak;
};
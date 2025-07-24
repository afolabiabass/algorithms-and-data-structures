/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    if (s == '') {
        return true;
    }

    let canBreak = false
    wordDict.forEach((word) => {
        if (s.includes(word)) {
            canBreak = wordBreak(s.replace(word, ''), wordDict)
        }
    })
    
    return canBreak;
};

console.log(wordBreak("leetcode", ["leet","code"])) // true
console.log(wordBreak("applepenapple", ["apple","pen"])) // true
console.log(wordBreak("catsandog", ["cats","dog","sand","and","cat"])) // false
console.log(wordBreak("dogs", ["dog","s","gs"])) // expected: true returns: false
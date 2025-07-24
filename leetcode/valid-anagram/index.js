/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('')
};
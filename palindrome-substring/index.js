function PalindromicSubstring(str) {
    if (str.length < 2) {
        return str;
    }
    let longestSubStr = 'none';
    for (let [index, char] of str.split('').entries()) {
        let i = str.length;
        while (i != index) {
            const subStr = str.substring(index, i);
            const revSubStr = subStr.split('').reverse().join('');
            if (subStr === revSubStr && subStr.length > 2) {
                longestSubStr = subStr;
                return longestSubStr;
            }
            i--;
        }
    }

    return longestSubStr;
}
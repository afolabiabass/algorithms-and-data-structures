function deletion_distance(str1, str2) {
  let longestSubStr = 0;
  for (let [index, char] of str1.split('').entries()) {
    let i = str1.length;
    while (i != index) {
      const subStr = str1.substring(index, i);;
      if (str2.includes(subStr)) {
        const diff1 = str1.length - subStr.length > 0 ? str1.length - subStr.length : 0;
        const diff2 = str2.length - subStr.length > 0 ? str2.length - subStr.length : 0;
        longestSubStr = diff1 > diff2 ? diff1 : diff2;
        return longestSubStr;
      }
      i--;
    }
  }

  return longestSubStr;
}
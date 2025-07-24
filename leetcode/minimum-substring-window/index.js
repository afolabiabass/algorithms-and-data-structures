/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    min = ''
    /**
     * @param {string} str
      * @return {Map}
     */
    strmap = function (str) {
        m = new Map()
        str.split('').forEach((x) => {
            m.set(x, m.has(x) ? m.get(x) + 1 : 1)
        })
        return m
    }

    substrtomap = strmap(t)

    containsSubstring = function (str) {
        strtomap = strmap(str)
        return Array.from(substrtomap.keys()).every((x) => strtomap.has(x) && strtomap.get(x) >= substrtomap.get(x))
    }
    
    i = 0
    while (i < s.length) {
        j = t.length - 1
        while (j < s.length) {
            substr = s.slice(i, j + 1)
            if (containsSubstring(substr)) {
                if (min === '') {
                    min = substr
                } else {
                    if (min.length > substr.length) {
                        min = substr
                    }
                }
            }
            j++
        }
        i++
    }
    return min
};

console.log(minWindow("ab", "a"))
console.log(minWindow("a", "aa"))
console.log(minWindow("ADOBECODEBANC", "ABC"))
// time complexity sucks for very long string like this
console.log(minWindow("wegdtzwabazduwwdysdetrrctotpcepalxdewzezbfewbabbseinxbqqplitpxtcwwhuyntbtzxwzyaufihclztckdwccpeyonumbpnuonsnnsjscrvpsqsftohvfnvtbphcgxyumqjzltspmphefzjypsvugqqjhzlnylhkdqmolggxvneaopadivzqnpzurmhpxqcaiqruwztroxtcnvhxqgndyozpcigzykbiaucyvwrjvknifufxducbkbsmlanllpunlyohwfsssiazeixhebipfcdqdrcqiwftutcrbxjthlulvttcvdtaiwqlnsdvqkrngvghupcbcwnaqiclnvnvtfihylcqwvderjllannflchdklqxidvbjdijrnbpkftbqgpttcagghkqucpcgmfrqqajdbynitrbzgwukyaqhmibpzfxmkoeaqnftnvegohfudbgbbyiqglhhqevcszdkokdbhjjvqqrvrxyvvgldtuljygmsircydhalrlgjeyfvxdstmfyhzjrxsfpcytabdcmwqvhuvmpssingpmnpvgmpletjzunewbamwiirwymqizwxlmojsbaehupiocnmenbcxjwujimthjtvvhenkettylcoppdveeycpuybekulvpgqzmgjrbdrmficwlxarxegrejvrejmvrfuenexojqdqyfmjeoacvjvzsrqycfuvmozzuypfpsvnzjxeazgvibubunzyuvugmvhguyojrlysvxwxxesfioiebidxdzfpumyon", "ozgzyywxvtublcl"))
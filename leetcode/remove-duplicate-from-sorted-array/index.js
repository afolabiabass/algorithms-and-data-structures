/**
 * @param {number[]} nums
 * @return {number}
 */
// 5x slower than solution below
// var removeDuplicates = function(nums) {
//     unq = new Map();
//     nums.forEach((n, i) => {
//         if (unq.has(n)) {
//             d = unq.get(n)
//             d.count++
//             d.indexes.push(i)
//             unq.set(n, d)
//         } else {
//             unq.set(n, { 'count': 1, 'indexes': [i]})
//         }
//     })

//     x = []
//     unq.forEach((u) => {
//         if (u.count > 1) {
//             u.indexes.shift()
//             x = x.concat(u.indexes)
//         }
//     })

//     x.forEach((i, n) => {
//         // splice remove items in place (https://en.wikipedia.org/wiki/In-place_algorithm)
//         nums.splice(i - n, 1)
//     })
//     return nums.length
// };

var removeDuplicates = function(nums) {
    nums.sort((a, b) => a - b)
    x = []
    nums.forEach((n, i) => {
        if (i > 0 && nums[i - 1] === n) {
            x.push(i)
        }
    })
    x.forEach((i, n) => {
        // splice remove items in place (https://en.wikipedia.org/wiki/In-place_algorithm)
        nums.splice(i - n, 1)
    })
    return nums.length
};

console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
console.log(removeDuplicates([-3,-1,0,0,0,3,3]))
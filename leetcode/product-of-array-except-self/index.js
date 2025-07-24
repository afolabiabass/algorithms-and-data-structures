/**
 * @param {number[]} nums
 * @return {number[]}
 */
// solves it in o(n)
var productExceptSelf = function(nums) {
    i = 0
    j = nums.length - 1
    o = []
    lsum = []
    lsummed = undefined
    rsum = []
    rsummed = undefined
    while (i < nums.length) {
        lsummed = i == 0 ? 1 : lsummed * nums[i - 1]
        lsum[i] = lsummed
        
        rsummed = j == nums.length - 1 ? 1 : rsummed * nums[j + 1]
        rsum[j] = rsummed

        i++
        j--
    }
    o = lsum.map((v, i) => v * rsum[i])
    return o
};


// this solves it in o(n^2)
// var productExceptSelf = function(nums) {
//     i = 0
//     o = []
//     while (i < nums.length) {
//         j = 0
//         sum = 1
//         while (j < nums.length) {
//             if (i !== j) {
//                 sum *= nums[j]
//             }
//             j++
//         }
//         o.push(sum)
//         i++
//     }
//     return o
// };

console.log(productExceptSelf([1, 2, 3, 4])) // [24, 12, 8, 6]
console.log(productExceptSelf([-1,1,0,-3,3])) // [0,0,9,0,0]

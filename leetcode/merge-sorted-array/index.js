/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for (i = 0; i < n; i++) {
        nums1 = nums1.fill(nums2[i], m + i,  m + i + 1)
    }
    return nums1.sort((a, b) => a - b);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3));
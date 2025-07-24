/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    x = []
    nums.forEach((n, i) => {
        if (n == val) {
            x.push(i)
        }
    })
    x.forEach((i, n) => {
        // splice remove items in place (https://en.wikipedia.org/wiki/In-place_algorithm)
        nums.splice(i - n, 1)
    })
    return nums.length
};

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));
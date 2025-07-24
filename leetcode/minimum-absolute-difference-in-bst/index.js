/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    if (!root) {
        return Number.MAX_SAFE_INTEGER
    }
    leftVal = root.left ? root.left.val : Number.MAX_SAFE_INTEGER
    if (leftVal === Number.MAX_SAFE_INTEGER) {
        return NaN
    }
    minOfLeft = getMinimumDifference(root.left)
    if (minOfLeft === NaN) {
        return Math.abs(root.val - leftVal)
    }
    return Math.min(minOfLeft, Math.abs(root.val - leftVal))
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [4,2,6,1,3] = 1
t = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6))
console.log(getMinimumDifference(t))

// [1,0,48,null,null,12,49] = 1
t = new TreeNode(1, new TreeNode(0), new TreeNode(48, new TreeNode(12), new TreeNode(49)))
console.log(getMinimumDifference(t))

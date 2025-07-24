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
var maxDepth = function (root) {
    lmax = 0
    rmax = 0

    if (root === null) {
        return 0;
    }

    if (root.left) {
        lmax = maxDepth(root.left)
    }
    if (root.right) {
        rmax = maxDepth(root.right)
    }

    max = lmax > rmax ? lmax : rmax

    return max + 1
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// [3,9,20] = 2
t = new TreeNode(3, new TreeNode(9), new TreeNode(20))
console.log(maxDepth(t))

// [3,9,20,null,null,15,7] = 3
t1 = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
console.log(maxDepth(t1))

// [0,2,4,1,null,3,-1,5,1,null,6,null,8] = 4
t2 = new TreeNode(0, new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1)), null), new TreeNode(4, new TreeNode(3, null, new TreeNode(6)), new TreeNode(-1, null, new TreeNode(8))))
console.log(maxDepth(t2))

// [1,2,3,4,5] = 3
t3 = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3))
console.log(maxDepth(t3))
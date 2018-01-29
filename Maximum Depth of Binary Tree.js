https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 //Divide and Conquer
var maxDepth = function(root) {
    if (root === null) {
        return 0
    }
    var left = maxDepth(root.left);
    var right = maxDepth(root.right);
    var curDepth = Math.max(left, right) + 1;
    return curDepth
}; 

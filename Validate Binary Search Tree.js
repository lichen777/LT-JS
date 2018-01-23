https://leetcode.com/problems/validate-binary-search-tree/description/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 //Divide and Conquer
var isValidBST = function(root) {
    
    return validate(root, -Infinity, Infinity);
};

var validate = function(root, min, max) {
    if(root === null) {
        return true;
    }
    if (root.val <= min || root.val >= max) {
        return false;
    }
    return validate(root.left, min, root.val) && validate(root.right, root.val, max);
}

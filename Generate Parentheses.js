https://leetcode.com/problems/generate-parentheses/description/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = []
    if (n <= 0) {
        return result
    }
    helper(result, "", n, n);
    return result;
};

var helper = function(result, parent, left, right) {
    if (left === 0 && right === 0){
        result.push(parent);
        return;
    }
    
    if (left > 0) {
        helper(result, parent + "(", left - 1, right);
    }
    if (right > left) {
        helper(result, parent + ")", left, right - 1);
    }
};

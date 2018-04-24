//https://leetcode.com/problems/implement-strstr/description/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle.length === 0) {
        return 0;
    }
    
    var len = haystack.length;
    var n = needle.length;
    
    for (var i = 0; i <= len - n; i++) {
        if (haystack.slice(i, i + n) === needle) {
            return i;
        }
    }
    return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let hash = new Map();
    let ans = 0;
    let start = 0;
    for (let i = 0; i < s.length; i++){
        if (hash.has(s.charAt(i))) {
            start = Math.max(start, hash.get(s.charAt(i)) + 1);
        }
        hash.set(s.charAt(i), i);
        ans = Math.max(ans, i - start + 1);
    }
    return ans;
};

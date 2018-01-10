/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var output = '';
    if (s === "" || !s) {
        return output;
    }
    
    if (s.length === 1) {
        return s;
    }
    var left = 0;
    var right = 0;
    var max = 1;
    for (var i = 0; i < s.length; i++) {
        var len = 0;
        var cur = '';
        if(s.charAt(i) === s.charAt(i + 1)) {
            left = i;
            right = i + 1;
            while (s.charAt(right) === s.charAt(right + 1)) {
                right++;
            }         
        } else {
            left = i;
            right = i;
        }
        
        while (s.charAt(left) && s.charAt(right) && s.charAt(left) === s.charAt(right)) {
            left--;
            right++;
        }
        len = right - left - 1;
        cur = s.substr(left + 1, len);
        if (max <= len) {
          output = cur;
          max = len;
        }
    }
    return output;
};

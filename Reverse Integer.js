https://leetcode.com/problems/reverse-integer/description/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var multiple = 1;
    var result = 0;
    if(x < 0) {
        multiple = -1;
        x = x * (-1);
    }
    var remainder = 0;
    while (x !== 0) {
        remainder = x % 10;
        result = result * 10 + remainder;
        x = Math.floor(x / 10);
    }
    if (result > 2147483647) {
        return 0;
    }
    return result * multiple;
};

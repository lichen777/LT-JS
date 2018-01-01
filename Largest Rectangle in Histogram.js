/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length;
    if (len === 0) {
        return 0;
    }
    
    var stack = [];
    var max = 0;
    for (var i = 0; i <= heights.length; i++) {
        var cur = (i === len) ? -1 : heights[i];
        while (stack.length > 0 && cur <= heights[stack[stack.length - 1]]) {
            var h = heights[stack.pop()];
            var w = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i;
            max = Math.max(max, h * w);
        }
        stack.push(i);
    }

    return max;
};

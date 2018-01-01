/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    var len = heights.length;
    if (len === 0) {
        return 0;
    }
    
    var index = [];
    var max = 0;
    for (var i = 0; i <= heights.length; i++) {
        var cur = (i === len) ? -1 : heights[i];
        while (index.length > 0 && cur <= heights[index[index.length - 1]]) {
            var h = heights[index.pop()];
            var w = index.length > 0 ? i - index[index.length - 1] - 1 : i;
            max = Math.max(max, h * w);
        }
        index.push(i);
    }

    return max;
};

https://leetcode.com/problems/jump-game/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
 //working solution
var canJump = function(nums) {
    var i = 0;
    var j = 0;
    var len = nums.length;
    if (len === 1) {
        return true;
    }
    for(i = 0; i < len; i++) {
        if (j >= i) {
            j = Math.max(j, i + nums[i]);
            if(j >= len - 1) {
                return true;
            } 
        }else {
            return false;
        }
    }
};

//Using Dynamic Planning, time exceeds limit
var canJump = function(nums) {
    var f = [];
    f[0] = true;
    var len = nums.length;
    if (len === 1) {
        return true;
    }
    for (var i = 0; i < len; i++) {
        if (f[i] === true) {
            var max = i + nums[i];
            for (var j = i; j <= max; j++) {
                f[j] = true;
            }
        } else {
            f[i] = false;
        }
    }
    return f[len - 1];
};

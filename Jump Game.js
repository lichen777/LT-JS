https://leetcode.com/problems/jump-game/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
 //working solution
var canJump = function(nums) {
    var len = nums.length;
    if (len === 1) {
        return true;
    }
    var furthest = nums[0];

    for(var i = 1; i < len; i++) {
        if (furthest >= i) {
            furthest = Math.max(furthest, i + nums[i]);
            if(furthest >= len - 1) {
                return true;
            } 
        }else {
            return false;
        }
    }
};

//another simple solution
var canJump = function(nums) {
    var len = nums.length;
    var furthest = nums[0];
    for (var i = 1; i < len; i++) {
        if (furthest >= i && furthest < i + nums[i]) {
            furthest = i + nums[i];
        }
    }
    return furthest >= (len - 1);
}

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

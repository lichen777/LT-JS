https://leetcode.com/problems/3sum/description/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var res = [];
    var len = nums.length;
    if (len < 3) {
        return res;
    }
    nums.sort((a,b) => a - b);
    for (var i = 0; i < len - 2; i++) {
        if (i === 0 || nums[i - 1] < nums[i]) {
            var target = 0 - nums[i];
            var left = i + 1;
            var right = len - 1;
            while (left < right) {
                if (nums[left] + nums[right] === target) {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    while (left < right && nums[left] === nums[left-1]){
                        left++;
                    }
                    right--;
                    while (left < right && nums[right] === nums[right+1]){
                        right--;
                    }
                } else if (nums[left] + nums[right] > target ){
                    right--;
                } else if (nums[left] + nums[right] < target ){
                    left++;
                }
            }
        }
    }
    return res;
};

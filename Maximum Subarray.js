
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    var sum = 0;
    var maxSum = -Number.MAX_VALUE;
    for (var i in nums) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};

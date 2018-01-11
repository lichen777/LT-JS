/**
https://leetcode.com/problems/two-sum/description/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = [];
    var map = {};
    for (var i = 0; i < nums.length; i++) {
        var valueNeeded = target - nums[i];
        if (map[valueNeeded] !== undefined) {
            result.push(map[valueNeeded], i);
            return result;
        }
        map[nums[i]] = i;
    }
    return result;
};

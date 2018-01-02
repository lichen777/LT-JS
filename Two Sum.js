/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = [];
    let map = {};
    for (var i = 0; i < nums.length; i++){
        let valueNeeded = target - nums[i];
        if (map[nums[i]] !== undefined){
            result.push(map[nums[i]], i);
        } else {
            map[valueNeeded] = i;
        }
    }
    return result;
};

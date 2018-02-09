https://leetcode.com/problems/search-for-a-range/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) {
        return [-1, -1]
    }
    var result = []
    var start = 0
    var end = nums.length - 1
    if(nums[start] > target || nums[end] < target){
        return [-1, -1]
    }
    var mid
    while(start + 1 < end) {
        mid = parseInt(start + (end - start) / 2)
        if (target === nums[mid]){
            end = mid
        }else if (target > nums[mid]) {
            start = mid
        }else {
            end = mid
        }
    }
    if(nums[start] === target) {
        result.push(start)
    } else if (nums[end] === target){
        result.push(end)
    } else {
        return [-1, -1]
    }
    var start = 0
    var end = nums.length - 1
    while(start + 1 < end) {
        mid = parseInt(start + (end - start) / 2)
        if (target === nums[mid]){
            start = mid
        }else if (target > nums[mid]) {
            start = mid
        }else {
            end = mid
        }
    }
    if(nums[end] === target) {
        result.push(end)
    } else if (nums[start] === target){
        result.push(start)
    } else {
        return [-1, -1]
    }
    return result
};

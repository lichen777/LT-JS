//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) {
        return 0;
    }
    var pointer = 0;
    for (var i = 0; i < nums.length; i++) {
        if(nums[i] !== nums[pointer]) {
            pointer++;
            nums[pointer] = nums[i]
        }
    }
    return pointer + 1;
};

https://leetcode.com/problems/kth-largest-element-in-an-array/description/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    var larger = [];
    var smaller =[];
    var pivot = nums[parseInt(nums.length / 2)];
    var pivotCnt = 0;
    
    for (let num of nums) {        
        if (num > pivot) {
            larger.push(num);
        } else if (num < pivot) {
            smaller.push(num);
        } else {
            pivotCnt++;
        }
    }
    
    if (larger.length >= k) {
        return findKthLargest (larger, k);
    } else if (larger.length + pivotCnt >= k) {
        return pivot;
    } else {
        return findKthLargest (smaller, k - (larger.length + pivotCnt));
    }
};

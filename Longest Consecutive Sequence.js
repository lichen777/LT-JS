/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let hash = new Set();
    for (let item of nums) {
        hash.add(item);
    }
    let ans = 0;
    
    for (let item of hash) {
        hash.delete(item);
        
        let pre = item - 1;
        let next = item + 1;
        
        while (hash.has(pre)) {
            hash.delete(pre);
            pre--;
        }
        
        while (hash.has(next)) {
            hash.delete(next);
            next++;
        }
        
        ans = Math.max(ans, next - pre - 1);
    }
    return ans;
};

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map();
        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            const diff = target - num; 
            
            const diffIdx = seen.get(diff);
            if (diffIdx !== undefined) {
                return [diffIdx, i];
            } else {
                seen.set(num, i);
            }
        }
    }
}

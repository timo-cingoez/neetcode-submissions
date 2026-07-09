class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        return new Set(nums).size !== nums.length;

        const candidates = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (candidates.has(nums[i])) {
                return true;
            }
            candidates.add(nums[i]);
        }
        return false;
    }
}

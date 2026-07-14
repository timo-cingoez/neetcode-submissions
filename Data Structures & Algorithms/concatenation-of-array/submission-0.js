class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const index = nums.length - 1;
        for (let i = 0; i <= index; i++) {
            nums.push(nums[i]);
        }
        return nums;
    }
}

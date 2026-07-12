class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let max = 0;
        for (const num of Array.from(set)) {
            if (set.has(num - 1)) continue;

            let current = num;
            let length = 1;
            while (set.has(current + 1)) {
                current++;
                length++;
            }

            if (length > max) max = length;
        }

        return max;
    }
}

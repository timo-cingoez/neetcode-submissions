class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqs = new Map();
        for (const num of nums) {
            freqs.set(num, (freqs.get(num) ?? 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);
        freqs.forEach((count, num) => {
            buckets[count].push(num);
        });

        const res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (const num of buckets[i]) {
                res.push(num);

                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}

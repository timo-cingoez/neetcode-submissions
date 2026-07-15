class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[i] > prices[j]) continue;

                const diff = prices[j] - prices[i];
                if (diff > max) {
                    max = diff;
                    console.log('max', max)
                }
            }
        }
        return max;
    }
}

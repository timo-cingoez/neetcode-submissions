class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // 0 <= prices[i] <= 100
        let minPrice = 101;
        let maxProfit = 0;

        for (const price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                maxProfit = Math.max(maxProfit, price - minPrice);
            }
        }

        return maxProfit;

        let max = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[i] > prices[j]) continue;
                const diff = prices[j] - prices[i];
                if (diff > max) max = diff;
            }
        }
        return max;
    }
}

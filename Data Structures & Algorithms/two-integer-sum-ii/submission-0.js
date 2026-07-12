class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let i = 0;
        let j = numbers.length - 1;
        while (i < j) {
            const sum = numbers[i] + numbers[j];
            if (sum === target) {
                return [i + 1, j + 1];
            } else if (sum < target) {
                i++;
            } else if (sum > target) {
                j--;
            }
        }

        return;

        const seen = new Map();
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            const diff = target - num;

            if (seen.has(diff)) {
                return [seen.get(diff), i + 1];
            }
            seen.set(num, i + 1);
        }

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (i === j) continue;
                if (numbers[i] + numbers[j] === target) {
                    return [i + 1, j + 1];
                }
            }
        }
    }
}

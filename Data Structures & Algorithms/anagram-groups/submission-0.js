class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();
        for (const str of strs) {
            // const chars = new Map();
            // for (const char of str) {
            //     chars.set(char, (chars.get(char) ?? 0) + 1);
            // }
            // const key = Array.from(chars)
            //     .sort(([a], [b]) => a.localeCompare(b))
            //     .map(([char, count]) => `${char}${count}`)
            //     .join("");

            // const key = str.split("").sort().join("");

            const count = new Array(26).fill(0);
            for (const char of str) {
                count[char.charCodeAt(0) - 97]++;
            }
            const key = count.join(',');

            const sublist = anagrams.get(key) ?? [];
            sublist.push(str);

            anagrams.set(key, sublist);
        }

        return Array.from(anagrams.values());
    }
}

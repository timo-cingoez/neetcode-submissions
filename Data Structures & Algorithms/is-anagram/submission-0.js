class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
       
        const chars = new Map();
        for (const char of s) {
            chars.set(char, (chars.get(char) ?? 0) + 1);
        }

        for (const char of t) {
            const count = chars.get(char);

            if (count === undefined) {
                return false;
            }

            if (count === 1) {
                chars.delete(char);
            } else {
                chars.set(char, count - 1);
            }
        }

        return chars.size === 0;

        // const arr_t = t.split('').sort();
        // const arr_s = s.split('').sort();
        // return arr_s.every((val, index) => val === arr_t[index]);
    }
}

class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isAlphaNumeric = (char) => /[a-z0-9]/i.test(char);
        s = s.toLowerCase();

        let i = 0;
        let j = s.length - 1;
        while (i < j) {
            while (i < j && !isAlphaNumeric(s[i])) {
                i++;
            }
            while (i < j && !isAlphaNumeric(s[j])) {
                j--;
            }

            if (s[i] !== s[j]) {
                return false;
            }

            i++;
            j--;
        }

        return true;

        s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        for (let i = 0, j = s.length - 1; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;

        const cleaned = s
            .split(" ")
            .join("")
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "");
        return cleaned === cleaned.split("").reverse().join("");
    }
}

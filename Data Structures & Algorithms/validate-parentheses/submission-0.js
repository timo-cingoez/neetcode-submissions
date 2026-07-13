class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false;

        const bracketsMap = new Map();
        bracketsMap.set("]", "[");
        bracketsMap.set("}", "{");
        bracketsMap.set(")", "(");

        const openBrackets = [];
        for (const c of s) {
            if (bracketsMap.has(c)) {
                const openBracket = bracketsMap.get(c);
                const val = openBrackets.pop();
                if (val !== openBracket) return false;
            } else {
                openBrackets.push(c);
            }
        }

        return openBrackets.length === 0;
    }
}

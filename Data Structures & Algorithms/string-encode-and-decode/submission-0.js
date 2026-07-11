class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded_string = '';
        for (const str of strs) {
            encoded_string += str.length + '#' + str;
        }
        return encoded_string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strs = [];

        let i = 0;
        while (i < str.length) {
            let j = i;

            while (str[j] !== '#') {
                j++;
            }

            const length = Number(str.substring(i, j));
            const word = str.substring(j + 1, j + 1 + length);
            strs.push(word);

            i = j + 1 + length;
        }

        return strs;

        let length = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            if (Number.isFinite(Number(char))) {
                length = length * 10 + Number(char);
            } else if (char === '#') {
                strs.push(str.substring(i + 1, i + 1 + length));
                i = i + length;
                length = 0;
            }
        }

        return strs;
    }
}

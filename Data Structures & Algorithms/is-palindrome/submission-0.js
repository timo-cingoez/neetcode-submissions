class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.split(' ').join('').toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        return cleaned === cleaned.split('').reverse().join('');
    }
}

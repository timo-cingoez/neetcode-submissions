class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let k;
        const rowSets = Array.from({ length: 9 }, () => new Set());
        const colSets = Array.from({ length: 9 }, () => new Set());
        const boxSets = Array.from({ length: 9 }, () => new Set());

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] === ".") {
                    continue;
                }

                const value = board[i][j];

                if (rowSets[i].has(value)) {
                    return false;
                }
                rowSets[i].add(value);

                if (colSets[j].has(value)) {
                    return false;
                }
                colSets[j].add(value);

                k = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (boxSets[k].has(value)) {
                    return false;
                }
                boxSets[k].add(value);
            }
        }

        return true;
    }
}

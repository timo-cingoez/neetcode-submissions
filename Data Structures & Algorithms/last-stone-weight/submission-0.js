class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const heap = new MaxHeap();
        heap.heapify(stones);
        // heap.print();
        // heap.delete();
        // heap.print();
        // heap.delete();
        // heap.print();
        // heap.delete();
        // heap.print();
        // heap.delete();
        // heap.print();

        while (heap.size() > 1) {
            const y = heap.delete();
            const x = heap.delete();

            if (x !== y) {
                heap.insert(y - x);
            }
        }

        return heap.size() === 1 ? heap.delete() : 0;
    }
}

// Its left child is at index 2 * i + 1.
// Its right child is at index 2 * i + 2.
// The parent of a node at index i can be found at index [(i-1)/2].

class MaxHeap {
    constructor() {
        let heap = [];

        this.print = () => console.log(heap);

        this.size = () => heap.length;

        this.siftDown = function (index) {
            while (true) {
                let largest = index;

                const left = index * 2 + 1;
                const right = index * 2 + 2;

                // left exists and is larger than largest
                if (left < heap.length && heap[left] > heap[largest]) {
                    largest = left;
                }

                // right exists and is larger than largest (or larger than left if it was larger than largest before)
                if (right < heap.length && heap[right] > heap[largest]) {
                    largest = right;
                }

                // if we were already at the largest node -> neither left or right were larger, we know we are done
                if (largest === index) break;

                [heap[index], heap[largest]] = [heap[largest], heap[index]];
                index = largest;
            }
        };

        this.heapify = function (array) {
            heap = [...array];

            const index = Math.floor(array.length / 2) - 1;
            for (let i = index; i >= 0; i--) {
                this.siftDown(i);
            }
        };

        this.delete = function () {
            if (heap.length === 0) return null;

            const root = heap[0];

            if (heap.length === 1) {
                heap.pop();
                return root;
            }

            heap[0] = heap.pop();

            this.siftDown(0);

            return root;
        };

        this.insert = function (num) {
            heap.push(num);

            let index = heap.length - 1;
            while (index > 0 && heap[Math.floor((index - 1) / 2)] < heap[index]) {
                const parentIndex = Math.floor((index - 1) / 2);
                const current = heap[parentIndex];
                heap[parentIndex] = heap[index];
                heap[index] = current;

                index = parentIndex;
            }
        };
    }
}

const { MinHeap } = require('./minheap');

// This method uses a heap to sort an array.
// Time Complexity:  O(n log n), where n is the number of elements to be sorted
// Space Complexity: O(n), where n is the number of elements to be sorted
function heapsort(list) {
  const heap = new MinHeap;
  list.forEach((item) => {
    heap.add(item);
  });
  const results = [];
  for(let i = 0; i < list.length; i += 1) {
    results.push(heap.remove());
  }
  return results;
}

module.exports = heapsort;

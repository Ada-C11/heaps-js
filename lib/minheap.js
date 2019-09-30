class HeapNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class MinHeap {
  constructor() {
    this.store = [];
  }

  // This method adds a HeapNode instance to the heap
  // Time Complexity: O(log n), where n is the number of nodes in the heap
  // Space Complexity: O(1)
  add(key, value = key) {
    const newNode = new HeapNode(key, value);
    this.store.push(newNode);
    this.heapUp(this.store.length - 1);
    return this.store;
  }

  // This method removes and returns an element from the heap
  //   maintaining the heap structure
  // Time Complexity: O(log n), where n is the number of nodes in the heap
  // Space Complexity: O(1)
  remove() {
    if (this.store.length === 0) {
      return undefined;
    }
    this.swap(0, this.store.length - 1);
    const removed = this.store.pop();
    this.heapDown(0);
    return removed.value;
  }


  // Used for Testing
  toString() {
    if (!this.store.length) {
      return "[]";
    }

    const values = this.store.map(item => item.value);
    const output = `[${values.join(', ')}]`;
    return output;
  }

  // This method returns true if the heap is empty
  // Time complexity: O(1)
  // Space complexity: O(1)
  isEmpty() {
    return this.store[0];
  }

  // This helper method takes an index and
  //  moves it up the heap, if it is less than it's parent node.
  //  It could be **very** helpful for the add method.
  // Time complexity: O(log n), where n is the number of nodes in the heap
  // Space complexity: O(1)
  heapUp(index) {
    const parentNodeIndex = Math.floor((index - 1) / 2);
    if (index === 0 || (this.store[index].key >= this.store[parentNodeIndex].key)) {
      return;
    }
    this.swap(index, parentNodeIndex);
    this.heapUp(parentNodeIndex);
  }

  // This helper method takes an index and 
  //  moves it down the heap if it's larger
  //  than its children
  heapDown(index) {
    const leftChild = index * 2 + 1;
    const rightChild = index * 2 + 2;
    let smaller;
    if (rightChild >= this.store.length) {
      if (leftChild >= this.store.length) {
        return;
      }
      smaller = leftChild;
    } else {
      smaller = this.store[leftChild].key <= this.store[rightChild].key ? leftChild : rightChild;
    }

    if (this.store[index].key <= this.store[smaller].key) {
      return;
    }

    this.swap(index, smaller);
    this.heapDown(smaller);
  }

  // If you want a swap method... you're welcome
  swap(index1, index2) {
    const s = this.store;
    [s[index1], s[index2]] = [s[index2], s[index1]];
  }
}

module.exports = {
  MinHeap
};

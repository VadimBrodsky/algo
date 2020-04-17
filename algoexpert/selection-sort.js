const { it } = require('../_utils/test.js');

// find smallest number swap it with into
// the sorted portion of the array
// the first item an so on

// Time O(N^2)
// Space O(1)
let selectionSort = (array) => {
  let swap = (array, idxA, idxB) => {
    let temp = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = temp;
  };

  let findSmallest = (array, begin, end) => {
    let smallestIndex = begin;
    for (let j = begin; j < end; j++) {
      if (array[j] < array[smallestIndex]) {
        smallestIndex = j;
      }
    }
    return smallestIndex;
  };

  for (let i = 0; i < array.length - 1; i++) {
    let min = findSmallest(array, i, array.length);
    swap(array, i, min);
  }

  return array;
};

it('should sort an array of numbers', (assert) => {
  let array = [8, 5, 2, 9, 5, 6, 3];
  assert.deepEqual(selectionSort(array), [2, 3, 5, 5, 6, 8, 9]);
});

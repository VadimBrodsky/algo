const { it } = require('../_utils/test.js');

// Time O(N^2) worst case
// Space O(1)
let bubbleSort = (array) => {
  let swap = (array, idxA, idxB) => {
    let temp = array[idxA];
    array[idxA] = array[idxB];
    array[idxB] = temp;
  };

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

it('should sort an array of numbers', (assert) => {
  let array = [8, 5, 2, 9, 5, 6, 3];
  assert.deepEqual(bubbleSort(array), [2, 3, 5, 5, 6, 8, 9]);
});

const { it } = require('../_utils/test.js');

// traverse the length of the array
// compare the current and the previous numbers
// if out of order swap them
// travese to the beginning of the array
// swapping as needed to find the right position
// for the current number

// Time O(N^2)
// Space O(1)
let insertionSort = (array) => {
  let swap = (array, indexA, indexB) => {
    let temp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = temp;
  };

  for (let i = 1; i < array.length; i++) {
    let current = i;
    let prev = i - 1;

    while (array[current] < array[prev] && prev >= 0) {
      swap(array, current, prev);
      current--;
      prev--;
    }
  }
  return array;
};

it('should sort an array of numbers', (assert) => {
  let array = [8, 5, 2, 9, 5, 6, 3];
  assert.deepEqual(insertionSort(array), [2, 3, 5, 5, 6, 8, 9]);
});

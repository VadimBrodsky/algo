const { it } = require('../_utils/test.js');

let insertionSort = (array) => {};

it('should sort an array of numbers', (assert) => {
  let array = [8, 5, 2, 9, 5, 6, 3];
  assert.deepEqual(insertionSort(array), [2, 3, 5, 5, 6, 8, 9]);
});

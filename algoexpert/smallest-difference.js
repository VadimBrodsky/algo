let { it } = require('../_utils/test.js');

let smallestDifference = (array1, array2) => {};

it('should return the 2 numbers that produce the smallest difference', (assert) => {
  let arrayA = [-1, 5, 10, 20, 28, 3];
  let arrayB = [26, 134, 135, 15, 17];
  assert.deepEqual(smallestDifference(arrayA, arrayB), [28, 26]);
});

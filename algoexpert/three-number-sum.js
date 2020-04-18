let { it } = require('../_utils/test.js');

// Time O(n^2)
// Space O(n)
// using an outer loop and 2 pointers
let threeNumberSum = (array, target) => {
  let sortedArray = array.sort((a, b) => a - b);
  let results = [];

  for (let current = 0; current < array.length - 2; current++) {
    let left = current + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[current] + array[left] + array[right];

      if (currentSum === target) {
        results.push([array[current], array[left], array[right]]);
      }

      if (currentSum <= target) {
        left++;
      }

      if (currentSum >= target) {
        right--;
      }
    }
  }

  return results;
};

it('should return all possible 3 numbers that sum to target', (assert) => {
  let array = [12, 3, 1, 2, -6, 5, -8, 6];
  assert.deepEqual(threeNumberSum(array, 0), [
    [-8, 2, 6],
    [-8, 3, 5],
    [-6, 1, 5],
  ]);
});

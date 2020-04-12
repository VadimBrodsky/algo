const { it } = require('../_utils/test.js');

// Time O(log(N))
// Space O(1)
let binarySearch = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let potentialMatch = array[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      right = middle - 1;
    } else if (target > potentialMatch) {
      left = middle + 1;
    }
  }

  return -1;
};

// Time O(log(N))
// Space O(log(N))
binarySearch = (array, target) => {
  let recurse = (array, target, left, right) => {
    if (left > right) {
      return -1;
    }

    let middle = Math.floor((left + right) / 2);
    let potentialMatch = array[middle];

    if (target === potentialMatch) {
      return middle;
    } else if (target < potentialMatch) {
      return recurse(array, target, left, middle - 1);
    } else if (target > potentialMatch) {
      return recurse(array, target, middle + 1, right);
    }
  };

  return recurse(array, target, 0, array.length - 1);
};

it('should find the number in a sorted array', (assert) => {
  let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
  assert.equal(binarySearch(array, 33), 3);
});

it('should return -1 if the number is not found in a sorted array', (assert) => {
  let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
  assert.equal(binarySearch(array, 76), -1);
});

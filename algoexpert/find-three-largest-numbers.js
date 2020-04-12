const { it } = require('../_utils/test.js');

// Time O(n)
// Space O(1)
let findThreeLargestNumbers = (array) => {
  let largestThree = [-Infinity, -Infinity, -Infinity];

  for (num of array) {
    let currentNum = num;

    for (let i = largestThree.length - 1; i >= 0; i--) {
      if (currentNum > largestThree[i]) {
        let prevLarge = largestThree[i];
        largestThree[i] = currentNum;
        currentNum = prevLarge;
      }
    }
  }

  return largestThree;
};

it('should return the 3 largest numbers in an array of numbers', (assert) => {
  let array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7];
  assert.deepEqual(findThreeLargestNumbers(array), [18, 141, 541]);
});

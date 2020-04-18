let { it } = require('../_utils/test.js');

// Time O(nLog(n) + mlog(m)) because of sorting
// Space O(1)
let smallestDifference = (arrayA, arrayB) => {
  arrayA = arrayA.sort((a, b) => a - b);
  arrayB = arrayB.sort((a, b) => a - b);

  let minDifference = Infinity;
  let smallestPair = [];

  let pointerA = 0;
  let pointerB = 0;

  while (pointerA < arrayA.length && pointerB < arrayB.length) {
    let numA = arrayA[pointerA];
    let numB = arrayB[pointerB];
    let difference = Math.abs(numA - numB);

    if (minDifference > difference) {
      minDifference = difference;
      smallestPair = [numA, numB];
    }

    if (numA > numB) {
      pointerB++;
    } else if (numA < numB) {
      pointerA++;
    } else {
      // when numbers are equal the difference is 0
      return [numA, numB];
    }
  }

  return smallestPair;
};

it('should return the 2 numbers that produce the smallest difference', (assert) => {
  let arrayA = [-1, 5, 10, 20, 28, 3];
  let arrayB = [26, 134, 135, 15, 17];
  assert.deepEqual(smallestDifference(arrayA, arrayB), [28, 26]);
});

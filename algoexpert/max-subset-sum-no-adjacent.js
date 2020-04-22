const { it, describe } = require('../_utils/test.js');

// Time O(n)
// Space O(n) because of the maxSums array
let maxSubsetSumNoAdjacent = (array) => {
  if (!array.length) {
    return;
  }

  if (array.length === 1) {
    return array[0];
  }

  let maxSums = array.slice();
  maxSums[1] = Math.max(array[0], array[1]);

  for (let i = 2; i < array.length; i++) {
    maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
  }

  return maxSums[array.length - 1];
};

describe('Max subset sum no adjacent elements', () => {
  it('should return the largest sum', (assert) => {
    let array = [7, 10, 12, 7, 9, 14];
    assert.equal(maxSubsetSumNoAdjacent(array), 33);
  });
});

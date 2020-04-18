let { it } = require('../_utils/test.js');

let threeNumberSum = (array, target) => {};

it('should return 3 numbers that are summed to the target', (assert) => {
  let array = [12, 3, 1, 2, -6, 5, -8, 6];
  // [-8, 2, 6]
  // [-8, 3, 5]
  // [-6, 1, 5]
  assert.deepEqual(threeNumberSum(array, 0), [2, -8, 6]);
});

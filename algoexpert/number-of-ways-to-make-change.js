const { it, describe } = require('../_utils/test.js');

// Time O(nd), where d is the number of coin denominations
// Space O(n)
let numberOfWaysToMakeChange = (targetAmount, coins) => {
  // initialize the ways array to be loner because we want 0 in the beginning
  let ways = new Array(targetAmount + 1);
  ways.fill(0);
  ways[0] = 1; // can make 0 with 0 coins

  for (let coin of coins) {
    for (let amount = 1; amount <= targetAmount; amount++) {
      if (coin <= amount) {
        ways[amount] = ways[amount] + ways[amount - coin];
      }
    }
  }

  return ways[targetAmount];
};

describe('Number of ways to make change', () => {
  it('should return a number', (assert) => {
    let coins = [1, 5, 10, 25];
    assert.equal(numberOfWaysToMakeChange(10, coins), 4);
  });

  it('should return 0 for target sum that is impossible to make', (assert) => {
    let coins = [5];
    assert.equal(numberOfWaysToMakeChange(9, coins), 0);
  });
});

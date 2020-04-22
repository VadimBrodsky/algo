const { it, describe } = require('../_utils/test.js');

// Time O(nd), where d is the amount of coins
// Space O(n)
let minNumberOfCoinsForChange = (targetAmount, coins) => {
  let change = new Array(targetAmount + 1);
  change.fill(Infinity);
  change[0] = 0;

  for (let coin of coins) {
    for (let amount = 1; amount < change.length; amount++) {
      if (coin <= amount) {
        // console.log({ amount, coin, change: change.toString() });
        change[amount] = Math.min(change[amount], change[amount - coin] + 1);
      }
    }
  }

  return change[targetAmount] === Infinity ? -1 : change[targetAmount];
};

describe('Min Number of Coins for Change', () => {
  it('should return a number of coins', (assert) => {
    assert.equal(minNumberOfCoinsForChange(6, [1, 2, 4]), 2);
  });

  it('should return -1 if we cannot return change', (assert) => {
    assert.equal(minNumberOfCoinsForChange(7, [2, 4]), -1);
  });
});

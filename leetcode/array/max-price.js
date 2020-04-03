// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

let { test } = require('../../_utils/test');
let _ = require('lodash');

/**
 *  * @param {number[]} prices
 *   * @return {number}
 *    */

var maxProfit = function(prices) {
  if (prices.length < 2) {
    return 0;
  }

  let buyIndex = 0;
  for (let i = buyIndex; i < prices.length; i++) {
    buyIndex = prices[buyIndex] > prices[i] ? i : buyIndex;
  }

  let sellIndex = buyIndex + 1;
  for (let j = sellIndex; j < prices.length; j++) {
    sellIndex = prices[sellIndex] < prices[j] ? j : sellIndex;
  }

  // console.log({ buyIndex, sellIndex });

  if (prices[buyIndex] >= prices[sellIndex]) {
    return 0;
  }


  return prices[sellIndex] - prices[buyIndex] + maxProfit(prices.slice(sellIndex + 1));
};

test(({ equal }) => {
  equal(maxProfit([7, 1, 5, 3, 6, 4]), 7);
});

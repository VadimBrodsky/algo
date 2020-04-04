let { test } = require('../../_utils/test');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let i = Number.parseInt(str.trimStart());
  let max = Math.pow(2, 31);

  if (!i) {
    return 0;
  } else if (Math.abs(i) >= max && Math.sign(i) === -1) {
    return max * Math.sign(i);
  } else if (i >= max) {
    return max - 1;
  }

  return i;
};

test((assert) => {
  assert.equal(myAtoi('42'), 42);
  assert.equal(myAtoi('   -42'), -42);
  assert.equal(myAtoi('4193 with words'), 4193);
  assert.equal(myAtoi('words and 987'), 0);
  assert.equal(myAtoi('-91283472332'), -2147483648);
  assert.equal(myAtoi('2147483648'), 2147483647);
});

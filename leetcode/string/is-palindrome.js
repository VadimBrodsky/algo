let { test } = require('../../_utils/test');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let cleanString = s.toLowerCase().match(/[a-zA-Z0-9]/g);

  if (!cleanString) {
    return true;
  }

  let reversed = [...cleanString].reverse();
  return cleanString.join('') === reversed.join('');
};

test((assert) => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true);
  assert.equal(isPalindrome('race a car'), false);
  assert.equal(isPalindrome(''), true);
  assert.equal(isPalindrome(' '), true);
  assert.equal(isPalindrome('.'), true);
  assert.equal(isPalindrome('0P'), false);
  assert.equal(isPalindrome('a'), true);
});

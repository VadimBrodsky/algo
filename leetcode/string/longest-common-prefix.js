let { test } = require('../../_utils/test');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/887/
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let commonString = '';
  let [firstString] = strs;

  if (!firstString) {
    return '';
  }

  for (let i = 0; i < firstString.length; i++) {
    if (strs.some((string) => string[i] !== firstString[i])) {
      return commonString;
    } else {
      commonString += firstString[i];
    }
  }

  return commonString;
};

test((assert) => {
  assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl');
  assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '');
  assert.equal(longestCommonPrefix([]), '');
});

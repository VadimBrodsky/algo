let { test } = require('../../_utils/test');

// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {};

test((assert) => {
  assert.equal(strStr('hello', 'll'), 2);
  assert.equal(strStr('aaaaa', 'bba'), -1);
});

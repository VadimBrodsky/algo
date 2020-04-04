let { test } = require('../../_utils/test');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/885/
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// var strStr = function(haystack, needle) {
//   if (needle === '') {
//     return 0;
//   }

//   let match = haystack.match(new RegExp(needle));

//   if (!match) {
//     return -1;
//   }

//   return match.index;
// };

var strStr = function(haystack, needle) {
  return haystack.indexOf(needle);
};



test((assert) => {
  assert.equal(strStr('hello', 'll'), 2);
  assert.equal(strStr('aaaaa', 'bba'), -1);
  assert.equal(strStr('bbbb', ''), 0);
});

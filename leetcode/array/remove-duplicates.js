let { test } = require('../../_utils/test');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
 * @param {number[]} nums
 * @return {number}
 */

// var removeDuplicates = function(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     while (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//     }
//   }
//   return nums.length;
// };

var removeDuplicates = function(nums) {
  let slow = 0;
  let fast = 0;

  while (slow < nums.length) {
    if (nums[slow] === nums[fast]) {
      fast++;
    } else {
      slow++;
      nums.splice(slow, fast - slow);
      fast = slow;
    }
  }

  return nums.length;
};

test(({ deepEqual }) => {
  let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
  let length = removeDuplicates(arr);
  deepEqual(arr.slice(0, length), [0, 1, 2, 3, 4]);
});

test(({ deepEqual }) => {
  let arr = [1,1,1,2];
  let length = removeDuplicates(arr);
  deepEqual(arr.slice(0, length), [1, 2]);
});

test(({ deepEqual }) => {
  let arr = [0, 0, 0, 0, 0, 1, 2, 2, 3, 3, 4, 4];
  let length = removeDuplicates(arr);
  deepEqual(arr.slice(0, length), [0, 1, 2, 3, 4]);
});

const { it } = require('../_utils/test.js');

// reverse the string and compare with the original
// Time O(n) or O(n^2) in some languages
// Space O(n)
let palindromeCheck = (string) => {
  let reversedString = '';
  for (let char of string) {
    reversedString = char + reversedString;
  }
  return string === reversedString;
};

// reverse using an array
// Time O(n)
// Space O(n)
palindromeCheck = (string) => {
  let reversedArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    reversedArray.push(string[i]);
  }
  return reversedArray.join('') === string;
};

// using recursion
// Time O(n)
// Space O(n) or O(1) if tail call optimization
palindromeCheck = (string) => {
  if (string.length === 1) {
    return true;
  }

  return (
    string[0] === string[string.length - 1] &&
    palindromeCheck(string.substring(1, string.length - 1))
  );
};

// using pointers, like the recursive solution but iteratively
// Time O(n)
// Space O(1)
palindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
};

it('returns true for a palindrome', (assert) => {
  assert.equal(palindromeCheck('racecar'), true);
});

it('returns false for not a palindrome string', (assert) => {
  assert.equal(palindromeCheck('abracadabra'), false);
});

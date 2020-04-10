// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return Array.from(str).reverse().join('') === str;
// }

// function palindrome(str) {
//   return Array.from(str).every((el, i) => el === str[str.length - 1 - i]);
// }

function palindrome(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[str.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
}

module.exports = palindrome;

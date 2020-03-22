// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charCount = {};

  for (let char of str) {
    charCount[char] = charCount[char] + 1 || 1;
  }

  let maxChar = '';
  for (let char in charCount) {
    maxChar = maxChar || char;

    if (charCount[char] > charCount[maxChar]) {
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

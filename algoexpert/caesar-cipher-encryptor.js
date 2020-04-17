const { it } = require('../_utils/test.js');

// using unicode functions built into JS
// Time O(n)
// Space O(n)
caesarCypher = (string, key) => {
  const UNICODE_A = 96;
  const UNICODE_Z = 122;
  const NUM_OF_LETTERS = 26;

  let keyInRange = key % NUM_OF_LETTERS;

  return Array.from(string)
    .map((char) => {
      let charCode = char.charCodeAt();
      let shiftedCode = charCode + keyInRange;

      return shiftedCode <= UNICODE_Z
        ? String.fromCharCode(shiftedCode)
        : String.fromCharCode((shiftedCode % UNICODE_Z) + UNICODE_A);
    })
    .join('');
};

// using an array of letters as the alphabet
// Time O(n)
// Space O(n)
caesarCypher = (string, key) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let keyInRange = key % alphabet.length;

  return Array.from(string)
    .map((char) => {
      let shiftedCode = alphabet.findIndex((c) => c === char) + keyInRange;

      return shiftedCode <= alphabet.length - 1
        ? alphabet[shiftedCode]
        : alphabet[-1 + (shiftedCode % (alphabet.length - 1))];
    })
    .join('');
};

it('should encrypt the input string by shifting the letters of the alphabet by a key', (assert) => {
  assert.equal(caesarCypher('xyz', 2), 'zab');
});

it('should work for large keys', (assert) => {
  assert.equal(caesarCypher('xyz', 54), 'zab');
});

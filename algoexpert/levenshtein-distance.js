const { it, describe } = require('../_utils/test.js');

// dynamic programming
// Time O(nm)
// Space O(nm)
let levenshteinDistance = (string1, string2) => {
  // insertion, deletion, substitution
  let edits = createMatrix(string1.length + 1, string2.length + 1);

  // set the first row to increment from 0..n
  for (let i = 0; i < string2.length + 1; i++) {
    edits[0][i] = i;
  }

  // set the first column to increment from 0..m
  for (let i = 1; i < string1.length + 1; i++) {
    edits[i][0] = edits[i - 1][0] + 1;
  }

  for (let row = 1; row < string1.length + 1; row++) {
    for (let col = 1; col < string2.length + 1; col++) {
      let diagonal = edits[row - 1][col - 1];
      let left = edits[row][col - 1];
      let top = edits[row - 1][col];

      let letterA = string2[col - 1];
      let letterB = string1[row - 1];
      // console.log({ letterA, letterB, row, col, d: diagonal, l: left, t: top });

      if (letterA === letterB) {
        edits[row][col] = diagonal;
      } else {
        edits[row][col] = Math.min(diagonal, left, top) + 1;
      }
    }
  }
  console.log(edits);
  return edits[string1.length][string2.length];
};

// Time O(nm)
// Space O(min(n, m))
levenshteinDistance = (string1, string2) => {
  let smallString = string1.length < string2.length ? string1 : string2;
  let bigString = string1.length >= string2.length ? string1 : string2;

  // row 0, 1, 2, 3 ... n
  let evenEdits = new Array(smallString.length + 1).fill(null).map((el, i) => i);
  let oddEdits = new Array(smallString.length + 1).fill(null);
  let currentEdits;

  for (let i = 1; i < bigString.length + 1; i++) {
    currentEdits = i % 2 === 1 ? oddEdits : evenEdits;
    let prevEdits = i % 2 === 1 ? evenEdits : oddEdits;

    // column 0, 1 ... m
    currentEdits[0] = i;

    for (let j = 1; j < smallString.length + 1; j++) {
      let diagonal = prevEdits[j - 1];
      let top = prevEdits[j];
      let left = currentEdits[j - 1];

      if (bigString[i - 1] === smallString[j - 1]) {
        currentEdits[j] = diagonal;
      } else {
        currentEdits[j] = 1 + Math.min(diagonal, top, left);
      }
    }
  }

  console.log({ smallString, bigString, evenEdits, oddEdits });
  return bigString.length % 2 === 0 ? evenEdits[smallString.length] : oddEdits[smallString.length];
};

function createMatrix(width, height) {
  let array = [];
  for (let i = 0; i < width; i++) {
    let subArray = [];
    for (let j = 0; j < height; j++) {
      subArray.push(null);
    }
    array.push(subArray);
  }
  return array;
}

describe('Levenshtein Distance', () => {
  it('should return the number of operations to turn string1 into string2', (assert) => {
    let str1 = 'abc';
    let str2 = 'yabd';
    assert.equal(levenshteinDistance(str1, str2), 2);
  });
});

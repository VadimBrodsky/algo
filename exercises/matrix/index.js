// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = createMatrix(n);
  let counter = 1;
  let topCounter = 0;
  let bottomCounter = 0;

  iterate(0, n, (i) => {
    if (i % 2 === 0) {
      let startRow = topCounter;
      let endRow = n - topCounter;
      let startCol = topCounter;
      let endCol = n - topCounter;

      iterate(startRow, endRow, (row) => {
        iterate(startCol, endCol, (col) => {
          matrix[row][col] = counter;
          counter++;
        });
        startCol = n - 1 - topCounter;
      });

      topCounter++;
    } else {
      let startRow = n - 1 - bottomCounter;
      let endRow = bottomCounter;
      let startCol = n - topCounter - 1;
      let endCol = bottomCounter;

      iterate(startRow, endRow, (row) => {
        for (let col = startCol; col >= endCol; col--) {
          matrix[row][col] = counter;
          counter++;
        }
        startCol = bottomCounter;
      });

      bottomCounter++;
    }
  });

  return matrix;
}

function createMatrix(n) {
  let array = [];

  iterate(0, n, (i) => {
    array.push([]);
    iterate(0, n, (j) => array[i].push('__'));
  });

  return array;
}

function iterate(from, to, cb, inclusive = false) {
  if (from === to) {
    return;
  }

  cb(from);

  let step = from < to ? from + 1 : from - 1;
  iterate(step, to, cb);
}

// console.log(matrix(5));

module.exports = matrix;

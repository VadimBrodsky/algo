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
  function createMatrix(n) {
    let array = [];

    for (let i = 0; i < n; i++) {
      array.push([]);
      for (let j = 0; j < n; j++) {
        array[i].push('__');
      }
    }

    return array;
  }

  let counter = 1;
  let matrix = createMatrix(n);

  let startCol;
  let endCol;
  let startRow;
  let endRow;

  let topCounter = 0;
  let bottomCounter = 0;

  for (i = 0; i < 4; i++) {
    if (i % 2 === 0) {
      startRow = topCounter;
      endRow = n - topCounter;
      startCol = topCounter;
      endCol = n - topCounter;

      for (let row = startRow; row < endRow; row++) {
        for (let col = startCol; col < endCol; col++) {
          matrix[row][col] = counter.toString().padStart(2, ' ');
          counter++;
        }
        startCol = n - 1 - topCounter;
      }

      topCounter++;
    } else {
      startRow = n - bottomCounter;
      endRow = bottomCounter - 1;
      startCol = n - bottomCounter - 1;
      endCol = bottomCounter - 1;

      for (let row = startRow; row > endRow; row--) {
        for (let col = startCol; col >= endCol; col--) {
          matrix[row][col] = counter.toString().padStart(2, ' ');
          counter++;
        }
        startCol = i -  bottomCounter;
      }
    }

    bottomCounter++;
  }

  return matrix;
}

function printMatrix(array) {
  console.log(JSON.stringify(array).replace(/\],/g, '],\n'));
  console.log('');
}

printMatrix(matrix(2));
printMatrix(matrix(3));
printMatrix(matrix(4));
printMatrix(matrix(5));
printMatrix(matrix(6));

module.exports = matrix;

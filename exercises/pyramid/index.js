// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//   let width = n + n - 1;

//   for (let row = 1, hashes = 1; row <= n; row++) {
//     let str = '';
//     let spacesOnEachSide = (width - hashes) / 2;

//     for (let col = 1; col <= width; col++) {
//       if (col > spacesOnEachSide && col <= width - spacesOnEachSide) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }

//     console.log(str);
//     hashes += 2;
//   }
// }

// function pyramid(n) {
//   let width = n + n - 1;
//   let center = Math.floor(width / 2);

//   for (let row = 0; row < n; row++) {
//     let str = '';

//     for (let col = 0; col < width; col++) {
//       if (center - row <= col && center + row >= col) {
//         str += '#';
//       } else {
//         str += ' ';
//       }
//     }

//     console.log(str);
//   }
// }

function pyramid(n) {
  let width = n * 2 - 1;
  let center = Math.floor(width / 2);

  function recurse(n, row = 0, col = 0, str = '') {
    if (row === n) {
      return;
    }

    if (width === str.length) {
      console.log(str);
      return recurse(n, row + 1);
    }

    if (center - row <= col && center + row >= col) {
      str += '#';
    } else {
      str += ' ';
    }

    recurse(n, row, col + 1, str);
  }

  recurse(n, 0, 0, '');
}

module.exports = pyramid;

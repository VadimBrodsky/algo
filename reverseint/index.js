// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//   let reversed = Number.parseInt(
//     Array.from(Math.abs(n).toString())
//       .reverse()
//       .join(''),
//   );

//   return reversed * Math.sign(n);
// }

function reverseInt(n) {
  let reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return Number.parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

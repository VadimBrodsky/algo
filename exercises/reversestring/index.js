// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   return Array.from(str).reverse().join('');
// }

// function reverse(str) {
//   let acc = '';
//   for(let i = 0; i < str.length; i++) {
//     acc = str[i] + acc
//   }
//   return acc;
// }

// function reverse(str) {
//   let acc = '';
//   for (let letter of str) {
//     acc = letter + acc;
//   }
//   return acc;
// }

function reverse(str) {
  return Array.from(str).reduce((acc, letter) => letter + acc, '');
}

module.exports = reverse;

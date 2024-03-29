// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   if (n < 2) {
//     return n;
//   }

//   let prev = 1;
//   let current = 1;

//   for (let i = 2; i < n; i++) {
//     [prev, current] = [current, prev + current];
//   }

//   return current;
// }

// recursive O(2^n)
function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn(...args);
    return cache[args];
  }
}

fib = memoize(fib);

module.exports = memoize(fib);

const { it } = require('../_utils/test.js');

// Time O(2^N)
// Space O(N)
let fib = (n) => {
  if (n === 1) {
    return 0;
  }

  if (n === 2) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

// Time O(N)
// Space O(N)
fib = (n, cache = { 1: 0, 2: 1 }) => {
  if (n in cache) {
    return cache[n];
  }

  cache[n] = fib(n - 1, cache) + fib(n - 2, cache);
  return cache[n];
};

// Time O(N)
// Space O(1)
fib = (n) => {
  let lastTwo = [0, 1];

  for (let i = 3; i <= n; i++) {
    let nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
  }

  return lastTwo[n > 1 ? 1 : 0];
};

it('returns the Nth Fibonacci number', (assert) => {
  assert.equal(fib(1), 0);
  assert.equal(fib(2), 1);
  assert.equal(fib(5), 3);
  assert.equal(fib(10), 34);
  assert.equal(fib(20), 4181);
  assert.equal(fib(40), 63245986);
});

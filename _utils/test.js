let assert = require('assert');

let noop = () => {};

let test = (cb) => cb(assert);
test.skip = noop;

let it = (name, cb) => {
  console.log(`TEST: ${name}`);
  try {
    cb(assert);
    console.log('PASSED!');
  } catch (e) {
    console.log('FAIL:');
    console.log(e);
  }
};
it.skip = noop;

module.exports = {
  test,
  it,
};

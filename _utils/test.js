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
  console.log();
};
it.skip = noop;

let describe = (name, cb) => {
  console.log(`SUITE: ${name}`);
  cb();
};
describe.skip = noop;

module.exports = {
  test,
  it,
  describe,
};

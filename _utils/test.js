let assert = require('assert');

let test = (cb) => cb(assert);
test.skip = (cb) => {};

module.exports = {
  test,
};

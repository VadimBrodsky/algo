let { it } = require('../_utils/test.js');

// Time O(n)
// Space O(n)
let twoNumberSum = (array, target) => {
  let seenNumbers = {};

  for (let number of array) {
    let targetNumber = target - number;

    if (targetNumber in seenNumbers && seenNumbers.hasOwnProperty(targetNumber)) {
      return [target - number, number].sort((a, b) => a - b);
    } else {
      seenNumbers[number] = true;
    }
  }

  return [];
};

// Time O(nLog(n))
// Space O(1)
twoNumberSum = (array, target) => {
  let sortedArray = array.sort((a, b) => a - b);

  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer !== rightPointer) {
    let leftVaule = sortedArray[leftPointer];
    let rightVaule = sortedArray[rightPointer];
    let sum = leftVaule + rightVaule;

    if (sum === target) {
      return [leftVaule, rightVaule];
    }

    if (sum > target) {
      rightPointer--;
    } else {
      leftPointer++;
    }
  }

  return [];
};

it('test 1', ({ deepEqual }) => {
  let array = [3, 5, -4, 8, 11, 1, -1, 6];
  deepEqual(twoNumberSum(array, 10), [-1, 11]);
});

it('test 2', ({ deepEqual }) => {
  let array = [-4, -1, 1, 3, 5, 6, 8, 11];
  deepEqual(twoNumberSum(array, 10), [-1, 11]);
});

it('test 3', ({ deepEqual }) => {
  let array = [1, 3, 5, 6, 10];
  deepEqual(twoNumberSum(array, 8), [3, 5]);
});

it('test 4', ({ deepEqual }) => {
  let array = [1, 3, 5, 6, 10];
  deepEqual(twoNumberSum(array, 12), []);
});

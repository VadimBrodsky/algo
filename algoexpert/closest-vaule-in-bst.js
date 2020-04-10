let { it } = require('../_utils/test.js');
let BST = require('../_utils/bst.js');

// average of O(Log(N)) time, O(1) space
// average of O(N) time, O(1) space
let closestVauleInBST = (bst, value) => {
  let currentNode = bst;
  let closest = bst.data;

  while (currentNode) {
    closest =
      Math.abs(closest - value) > Math.abs(currentNode.data - value)
        ? currentNode.data
        : closest;

    if (closest === value) {
      return closest;
    }

    if (currentNode.data > value) {
      currentNode = currentNode.left;
    } else {
      currentNode = currentNode.right;
    }
  }

  return closest;
};

// average of O(Log(N)), O(Log(N)) or O(Depth) space
// worst O(N) time, O(N) space
closestVauleInBST = (bst, value) => {
  function recurse(bst, value, closestValue) {
    if (closestValue === value || !bst) {
      return closestValue;
    }

    if (Math.abs(closestValue - value) > Math.abs(bst.data - value)) {
      closestValue = bst.data;
    }

    if (bst.data > value) {
      return recurse(bst.left, value, closestValue);
    } else {
      return recurse(bst.right, value, closestValue);
    }
  }

  return recurse(bst, value, Infinity);
};

it('test 1', ({ equal }) => {
  //      10
  //    5    15
  //  2  5  13  22
  // 1       14
  let tree = new BST(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(2);
  tree.insert(5);
  tree.insert(1);
  tree.insert(13);
  tree.insert(22);
  tree.insert(14);

  equal(closestVauleInBST(tree, 12), 13);
});

it('test 2', ({ equal }) => {
  //      10
  //    5    15
  //  2  5  13  22
  // 1       14
  let tree = new BST(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(2);
  tree.insert(5);
  tree.insert(1);
  tree.insert(13);
  tree.insert(22);
  tree.insert(14);

  equal(closestVauleInBST(tree, 15), 15);
});

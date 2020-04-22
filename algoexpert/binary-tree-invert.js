const { it, describe } = require('../_utils/test.js');

// Iterative Solution
// Time O(n)
// Space O(n) because of the array
let invertBinaryTree = (tree) => {
  let swapChildren = (node) => {
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
  };

  let queue = [tree];
  while (queue.length) {
    let current = queue.shift();
    if (current) {
      swapChildren(current);
      queue.push(current.left, current.right);
    }
  }
};

// Recursive solution
// Time O(n)
// Space O(d) where d is the depth of the tree
invertBinaryTree = (tree) => {
  let swapChildren = (node) => {
    let temp = node.right;
    node.right = node.left;
    node.left = temp;
  };

  let recurse = (node) => {
    if (node.left && node.right) {
      swapChildren(node);
      recurse(node.left);
      recurse(node.right);
    }
  };

  recurse(tree);
};

describe('Invert Binary Tree', () => {
  class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  let tree = new Node(1);
  tree.left = new Node(2);
  tree.right = new Node(3);
  tree.left.left = new Node(4);
  tree.left.right = new Node(5);
  tree.right.left = new Node(6);
  tree.right.right = new Node(7);
  tree.left.left.left = new Node(8);
  tree.left.left.right = new Node(9);

  //        1
  //      /   \
  //     2     3
  //    / \   / \
  //   4   5  6  7
  //  / \
  // 8   9

  it('should invert the given tree', (assert) => {
    invertBinaryTree(tree);
    assert.equal(tree.data, 1);
    assert.equal(tree.left.data, 3);
    assert.equal(tree.right.data, 2);
    assert.equal(tree.left.left.data, 7);
    assert.equal(tree.left.right.data, 6);
    assert.equal(tree.right.left.data, 5);
    assert.equal(tree.right.right.data, 4);
    assert.equal(tree.right.right.left.data, 9);
    assert.equal(tree.right.right.right.data, 8);
  });
});

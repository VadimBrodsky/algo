const { it, describe } = require('../_utils/test.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Time O(n)
// Space O(n) because of the array, otherwise O(d) where d is depth
let traverseBSTInOrder = (tree) => {
  let recurse = (node, result) => {
    if (node) {
      recurse(node.left, result);
      result.push(node.data);
      recurse(node.right, result);
    }

    return result;
  };

  return recurse(tree, []);
};

// Time O(n)
// Space O(n) because of the array, otherwise O(d) where d is depth
let traverseBSTPreOrder = (tree) => {
  let recurse = (node, result) => {
    if (node) {
      result.push(node.data);
      recurse(node.left, result);
      recurse(node.right, result);
    }

    return result;
  };

  return recurse(tree, []);
};

// Time O(n)
// Space O(n) because of the array, otherwise O(d) where d is depth
let traverseBSTPostOrder = (tree) => {
  let recurse = (node, result) => {
    if (node) {
      recurse(node.left, result);
      recurse(node.right, result);
      result.push(node.data);
    }

    return result;
  };

  return recurse(tree, []);
};

describe('BST Traversal', () => {
  //       10
  //      /  \
  //     5   15
  //    / \    \
  //   2   5   22
  //  /
  // 1

  let tree = new Node(10);
  tree.left = new Node(5);
  tree.left.left = new Node(2);
  tree.left.right = new Node(5);
  tree.left.left.left = new Node(1);
  tree.right = new Node(15);
  tree.right.right = new Node(22);

  it('should traverse the BST in order', (assert) => {
    assert.deepEqual(traverseBSTInOrder(tree), [1, 2, 5, 5, 10, 15, 22]);
  });

  it('should traverse the BST in pre-order', (assert) => {
    assert.deepEqual(traverseBSTPreOrder(tree), [10, 5, 2, 1, 5, 15, 22]);
  });

  it('should traverser the BST in post-order', (assert) => {
    assert.deepEqual(traverseBSTPostOrder(tree), [1, 2, 5, 5, 22, 15, 10]);
  });
});

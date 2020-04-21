const { it } = require('../_utils/test.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Time O(n)
// Space O(d), where d is the depth of the tree
let validateBST = (tree) => {
  let recurse = (node, min, max) => {
    if (!node) {
      return true;
    }

    if (node.data < min || node.data > max) {
      return false;
    }

    return (
      recurse(node.left, min, node.data) && recurse(node.right, node.data, max)
    );
  };

  return (
    recurse(tree.left, -Infinity, tree.data) &&
    recurse(tree.right, tree.data, Infinity)
  );
};

it('should return true if the binary tree is a BST', (assert) => {
  let tree = new Node(10);
  tree.left = new Node(5);
  tree.left.left = new Node(2);
  tree.left.right = new Node(5);
  tree.left.left.left = new Node(1);
  tree.right = new Node(15);
  tree.right.left = new Node(13);
  tree.right.left.right = new Node(14);
  tree.right.right = new Node(22);

  assert.equal(validateBST(tree), true);
});

it('should return false if the binary tree is not a BST', (assert) => {
  let tree = new Node(10);
  tree.left = new Node(5);
  tree.left.left = new Node(2);
  tree.left.right = new Node(5);
  tree.left.left.left = new Node(1);
  tree.right = new Node(15);
  tree.right.left = new Node(16);
  tree.right.left.right = new Node(14);
  tree.right.right = new Node(22);

  assert.equal(validateBST(tree), false);
});

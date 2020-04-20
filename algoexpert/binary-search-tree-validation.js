const { it } = require('../_utils/test.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let validateBST = (tree) => {

}

it('should return true if the binary tree is a BST', () => {
  let tree = new Node(10);
  tree.left = new Node(5);
  tree.left.left = new Node(2);
  tree.left.right = new Node(5);
  tree.left.left.left = new Node(1);
  tree.right = new Node(15);
  tree.right.left = new Node(13);
  tree.right.left.right = new Node(14);
  tree.right.right = new Node(22);

  expect.equal(validateBST(tree), true);
})

it('should return false if the binary tree is not a BST', () => {
  let tree = new Node(10);

  expect.equal(validateBST(tree), false);
})

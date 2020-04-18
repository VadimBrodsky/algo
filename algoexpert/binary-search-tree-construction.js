const { it } = require('../_utils/test.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let parent;
    let current = this;

    while (current) {
      if (current.data < data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  contains() {}

  delete() {}
}

it('should insert a node at the right place', (assert) => {
  let tree = new BST(10);
  tree.left = new Node(5);
  tree.left.left = new Node(2);
  tree.left.right = new Node(5);
  tree.left.left.left = new Node(1);
  tree.right = new Node(15);
  tree.right.left = new Node(13);
  tree.right.right = new Node(22);
  tree.right.left.right = new Node(14);

  tree.insert(12);
  assert.equal(tree.right.left.left.data, 12);
});

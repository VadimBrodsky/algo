const { it } = require('../_utils/test.js');

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Time Average O(log(n)) | worst O(n)
// Space recursively Average O(log(n)) | worst O(n)
// Space iteratively O(1)
class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let current = this;
    let parent = this;
    let direction;

    while (current) {
      parent = current;
      direction = data < current.data ? 'left' : 'right';
      current = current[direction];
    }

    parent[direction] = new Node(data);
  }

  contains(data) {
    let current = this;

    while (current) {
      if (data < current.data) {
        current = current.left;
      } else if (data > current.data) {
        current = current.right;
      } else {
        return current;
      }
    }

    return null;
  }

  remove(data) {
    let parent;
    let current = this;
    let direction;

    while (current && current.data !== data) {
      parent = current;
      direction = data < current.data ? 'left' : 'right';
      current = current[direction];
    }

    if (!current.left || !current.right) {
      if (parent) {
        parent[direction] = current[direction];
      } else {
        this.data = null;
      }
      return;
    }

    // if deleting the head pick the right subtree first
    let smallestDirection = !parent ? 'right' : 'left';
    let smallestParent = current;
    let smallest = current[smallestDirection];

    while (smallest.left || smallest.right) {
      smallestParent = smallest;
      smallestDirection = smallest.left ? 'left' : 'right';
      smallest = smallest[smallestDirection];
    }

    current.data = smallest.data;
    smallestParent[smallestDirection] = null;
  }
}

it('should insert a node at the right place on tree.insert', (assert) => {
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

it('should return the node if BST contains it on tree.contains', (assert) => {
  let tree = new BST(10);
  [5, 2, 5, 1, 15, 13, 22, 12, 14].forEach((num) => tree.insert(num));
  assert.equal(tree.contains(12).data, 12);
  assert.equal(tree.contains(11), null);
});

it('should remove the edge node with the given data on tree.remove', (assert) => {
  let tree = new BST(10);
  [5, 2, 5, 1, 15, 13, 22, 12, 14].forEach((num) => tree.insert(num));
  tree.remove(1);
  assert.equal(tree.contains(1), null);
});

it('should remove the middle note and rebalance the tree on tree.remove', (assert) => {
  let tree = new BST(10);
  [5, 2, 5, 1, 15, 13, 22, 12, 14].forEach((num) => tree.insert(num));
  tree.remove(2);
  assert.equal(tree.contains(2), null);
  assert.equal(tree.contains(5).left.data, 1);
});

it('should remove the middle note and rebalance the tree on tree.remove', (assert) => {
  let tree = new BST(10);
  [5, 2, 5, 1, 15, 13, 12, 22, 14].forEach((num) => tree.insert(num));
  tree.remove(15);
  assert.equal(tree.contains(12).left.data, 13);
  assert.equal(tree.contains(12).right.data, 22);
});

it('should remove the head note and rebalance the tree on tree.remove', (assert) => {
  let tree = new BST(10);
  [5, 2, 5, 1, 15, 13, 22, 12, 14].forEach((num) => tree.insert(num));
  tree.remove(10);
  assert.equal(tree.data, 12);
  assert.equal(tree.left.data, 5);
  assert.equal(tree.right.data, 15);
});

it('should null the tree on tree.remove and it only has one node', (assert) => {
  let tree = new BST(10);
  tree.remove(10);
  assert.equal(tree.data, null);
  assert.equal(tree.left, null);
  assert.equal(tree.right, null);
});

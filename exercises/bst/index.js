// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let side = data < this.data ? 'left' : 'right';

    if (!this[side]) {
      return (this[side] = new Node(data));
    }

    this[side].insert(data);
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    let side = data < this.data ? 'left' : 'right';
    if (this[side] !== null) {
      return this[side].contains(data);
    }

    return null;
  }
}

module.exports = Node;

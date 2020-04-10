class BST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    let side = data < this.data ? 'left' : 'right';

    if (!this[side]) {
      return (this[side] = new BST(data));
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

module.exports = BST;

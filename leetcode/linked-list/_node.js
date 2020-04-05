class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }

  static toArray(node) {
    let arr = [];
    let currentNode = node;

    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }

    return arr;
  }
}

module.exports = {
  Node,
};

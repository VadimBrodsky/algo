// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let last = this.head;

    while (last && last.next) {
      last = last.next;
    }

    return last;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (this.size() < 2) {
      this.clear();
      return;
    }

    let beforeLast = this.head;

    while (beforeLast.next && beforeLast.next.next) {
      beforeLast = beforeLast.next;
    }

    beforeLast.next = null;
  }

  insertLast(data) {
    let last = this.getLast();
    let node = new Node(data);

    if (last) {
      last.next = node;
    } else {
      this.head = node;
    }
  }

  getAt(index) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentIndex === index) {
        return currentNode;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return null;
  }

  removeAt(index) {
    if (index > this.size() - 1) {
      return;
    }

    if (index === 0) {
      this.removeFirst();
      return;
    }

    let preNode = this.getAt(index - 1);
    let postNode = this.getAt(index + 1);
    preNode.next = postNode;
  }

  insertAt(data, index) {
    if (index === 0) {
      this.insertFirst(data);
      return;
    }

    if (index > this.size() - 1) {
      this.insertLast(data);
      return;
    }

    let preNode = this.getAt(index - 1);
    let node = new Node(data, this.getAt(index));

    preNode.next = node;
  }

  forEach(fn) {
    let currentNode = this.head;

    while (currentNode) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }

  [Symbol.iterator]() {
    let index = 0;
    let size = this.size();

    return {
      next: () => {
        if (index > size - 1) {
          return { done: true };
        }

        let node = this.getAt(index);
        index++;

        return {
          value: node,
          done: false,
        };
      },
    };
  }
}

module.exports = { Node, LinkedList };

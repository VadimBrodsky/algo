const { it } = require('../_utils/test.js');

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.insertBefore(this.head, node);
    }
  }

  setTail(node) {
    if (!this.tail) {
      this.head = node;
      this.tail = tail;
    } else {
      this.insertAfter(this.tail, node);
    }
  }

  // O(1) time, O(1) space
  insertBefore(node, newNode) {
    if (node === this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let prev = node.prev;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = node;
    node.prev = newNode;
  }

  insertAfter(node, newNode) {
    if (node === this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      return;
    }

    let next = node.next;
    newNode.next = next;
    next.prev = newNode;
    node.next = newNode;
    newNode.prev = node;
  }

  // O(P) time, O(1) space
  insertAt(position, node) {
    if (position === 0) {
      this.insertHead(node);
    } else {
      let count = 0;
      let currentNode = this.head;
      while (currentNode && count !== position) {
        currentNode = currentNode.next;
        count++;
      }

      this.insertBefore(currentNode, node);
    }
  }

  // O(1) time, 0(1) space
  remove(node) {
    if (node.value === this.head.value) {
      this.head = this.head.next;
    }

    if (node.value === this.tail.value) {
      this.tail = this.tail.prev;
    }

    this.removeNodeBindings(node);
  }

  removeValue(nodeValue) {
    let node = this.contains(nodeValue);
    this.remove(node);
  }

  // O(N) time, O(1) space
  removeAll(nodeValue) {
    let node = this.contains(nodeValue);
    while (node) {
      this.remove(node);
      node = this.contains(nodeValue);
    }
  }

  // O(N) time, O(1) space
  contains(nodeValue) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === nodeValue) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return null;
  }

  toString() {
    let output = [];
    let currentNode = this.head;

    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return output.join(', ');
  }

  removeNodeBindings(node) {
    if (node.prev) {
      node.prev.next = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    }

    node.next = null;
    node.prev = null;
  }
}

function createDLL(arrayOfValues) {
  let list = new DoublyLinkedList();

  let nodes = arrayOfValues
    .map((value) => new Node(value))
    .map((node, index, nodes) => {
      let prevNode = nodes[index - 1];
      let nextNode = nodes[index + 1];

      if (prevNode) {
        node.prev = prevNode;
      }

      if (nextNode) {
        node.next = nextNode;
      }

      return node;
    });

  list.head = nodes[0];
  list.tail = nodes[nodes.length - 1];
  return list;
}

it('DLL should have contains', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  assert.equal(list.contains('B'), list.head.next);
  assert.equal(list.contains('Z'), null);
});

it('DLL should remove a node at the head', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.remove(list.head);
  assert.deepEqual(list.toString(), 'B, C, D, E, F');
});

it('DLL should remove a node at the tail', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.remove(list.tail);
  assert.deepEqual(list.toString(), 'A, B, C, D, E');
});

it('DLL should remove a node when has a single node', (assert) => {
  let list = createDLL(['A']);
  list.remove(list.head);
  assert.deepEqual(list.toString(), '');
});

it('DLL should remove a node', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.remove(list.head.next.next);
  assert.deepEqual(list.toString(), 'A, B, D, E, F');
});

it('DLL should remove a node with value', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.removeValue('E');
  assert.deepEqual(list.toString(), 'A, B, C, D, F');
});

it('DLL should removeAll nodes with value', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'C', 'E', 'F']);
  list.removeAll('C');
  assert.deepEqual(list.toString(), 'A, B, E, F');
});

it('DLL should insert a node before a node', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);

  list.insertBefore(list.head, new Node('0'));
  assert.deepEqual(list.toString(), '0, A, B, C, D, E, F');

  list.insertBefore(list.head.next.next, new Node('Z'));
  assert.deepEqual(list.toString(), '0, A, Z, B, C, D, E, F');
});

it('DLL should insert a node after a node', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);

  list.insertAfter(list.tail, new Node('0'));
  assert.deepEqual(list.toString(), 'A, B, C, D, E, F, 0');

  list.insertAfter(list.head.next.next, new Node('Z'));
  assert.deepEqual(list.toString(), 'A, B, C, Z, D, E, F, 0');
});

it('DLL should set a head', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.setHead(new Node('1'));
  assert.deepEqual(list.toString(), '1, A, B, C, D, E, F');
});

it('DLL should set a tail', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.setTail(new Node('99'));
  assert.deepEqual(list.toString(), 'A, B, C, D, E, F, 99');
});

it('DLL should insert at poisition', (assert) => {
  let list = createDLL(['A', 'B', 'C', 'D', 'E', 'F']);
  list.insertAt(3, new Node('99'));
  assert.deepEqual(list.toString(), 'A, B, C, 99, D, E, F');
});

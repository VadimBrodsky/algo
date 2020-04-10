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

  setHead(node) {}

  setTail(node) {}

  // O(1) time, O(1) space
  insertBefore(node) {}

  insertAfter(node) {}

  // O(P) time, O(1) space
  insertAt(position) {}

  // O(1) time, 0(1) space
  remove(nodeVaule) {}

  // O(N) time, O(1) space
  removeAll(nodeVaule) {}

  // O(N) time, O(1) space
  contains(nodeValue) {}

  toString() {
    let output = [];
    let currentNode = this.head;

    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return output.join(', ');
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
  let list = createDLL(['A', 'B', 'C' , 'D', 'E', 'F'])
  console.log(list, list.toString());
});

let { test } = require('../../_utils/test');
let { Node } = require('./_node.js');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/553/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */

// var deleteNode = function(node) {
//   let nextNode = node.next;
//   node.val = nextNode.val;
//   node.next = nextNode.next;

//   let currentNode = nextNode;
//   nextNode = currentNode.next;

//   while (nextNode) {
//     currentNode.val = nextNode.val;
//     currentNode.next = nextNode.next;

//     nextNode = nextNode.next && nextNode.next.next ? nextNode.next.next : null;
//   }
// };

var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

test((assert) => {
  let n2 = new Node(2);
  let n0 = new Node(0);
  let n1 = new Node(1);
  let n3 = new Node(3);

  n2.next = n0;
  n0.next = n1;
  n1.next = n3;

  deleteNode(n2);
  assert.deepEqual(Node.toArray(n2), [0, 1, 3]);
});

test((assert) => {
  let n0 = new Node(0);
  let rest = new Node(
    1,
    new Node(
      2,
      new Node(3, new Node(4, new Node(5, new Node(6, new Node(7, new Node(8, new Node(9))))))),
    ),
  );
  n0.next = rest;

  deleteNode(n0);
  assert.deepEqual(Node.toArray(n0), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

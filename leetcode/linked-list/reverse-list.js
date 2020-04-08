let { test } = require('../../_utils/test');
let { Node } = require('./_node.js');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/560/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function getLinkedListLength(list) {
  let i = 0;
  let pointer = list;

  while (pointer) {
    pointer = pointer.next;
    i++;
  }

  return i;
}

// var reverseList = function(head) {
//   let length = getLinkedListLength(head);
//   let newList;
//   let newListTail;

//   if (length < 2) {
//     return head;
//   }

//   for (let i = length - 1; i >= 0; i--) {
//     let pointer = head;

//     // move pointer to end
//     for (let j = 0; j < i; j++) {
//       pointer = pointer.next;
//     }

//     // console.log({ pointer });

//     let newNode = pointer;
//     newNode.next = null;

//     if (!newList) {
//       newList = newNode;
//     } else {
//       newListTail.next = newNode;
//     }

//     newListTail = newNode;
//   }

//   return newList;
// };

// iteratively
// var reverseList = function(head) {
//   if (!head || !head.next) {
//     return head;
//   }

//   let previous;
//   let current = head;
//   let next;

//   while (current) {
//     next = current.next; // save next
//     current.next = previous; // reverse
//     previous = current; // advance previous
//     current = next; // advance current
//   }

//   return previous; // new head at end
// };

// recursive
var reverseList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let reversedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedListHead;
}

test((assert) => {
  let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  let reversed = reverseList(list);
  assert.deepEqual(Node.toArray(reversed), [5, 4, 3, 2, 1]);
});

test((assert) => {
  let reversed = reverseList();
  assert.deepEqual(Node.toArray(reversed), []);
});

test((assert) => {
  let list = new Node(1);
  let reversed = reverseList(list);
  assert.deepEqual(Node.toArray(reversed), [1]);
});

let { test } = require('../../_utils/test');
let { Node } = require('./_node.js');

/**
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function(head, n) {
  let slow = head;
  let fast = head;
  let dropHead = false;

  for (i = 0; i < n; i++) {
    if (fast.next) {
      fast = fast.next;
    } else {
      slow = slow.next;
      dropHead = true;
      break;
    }
  }

  if (dropHead) {
    head = slow;
    return head;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

test((assert) => {
  let head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  let newHead = removeNthFromEnd(head, 2);
  assert.deepEqual(Node.toArray(newHead), [1, 2, 3, 5]);
});

test((assert) => {
  let head = new Node(1, new Node(2));
  let newhead = removeNthFromEnd(head, 2);
  assert.deepEqual(Node.toArray(newhead), [2]);
});

test((assert) => {
  let head = new Node(1, new Node(2));
  let newhead = removeNthFromEnd(head, 1);
  assert.deepEqual(Node.toArray(newhead), [1]);
});

test((assert) => {
  let head = new Node(1, new Node(2, new Node(3)));
  let newhead = removeNthFromEnd(head, 3);
  assert.deepEqual(Node.toArray(newhead), [2, 3]);
});

// Leetcode - Problem List - Problem 2095

// Intuition - Tortoise and Hare Algorithm, iterate till the fast pointer is not invalid, at the end of the iteration, middle of the list will be found, tracking the slow pointer in each iteration to connect the previous node with the next.

var listFromArray = (a) =>
  a.length ? new ListNode(a[0], listFromArray(a.slice(1))) : null;

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head) {
  if (!head || !head.next) return null;
  var slow = head;
  var fast = head;
  var prev = null;
  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (prev !== null) {
    prev.next = slow.next;
  }
  return head;
}

console.log(deleteMiddle(listFromArray([1, 3, 4, 7, 1, 2, 6])));
console.log(deleteMiddle(listFromArray([1, 2, 3, 4])));
console.log(deleteMiddle(listFromArray([2, 1])));

// Time Complexity - O(n)
// Space Complexity - O(1)

// Leetcode - Problem List - Problem 2130

// Intuition - Since it can't be easily traversed a singly linked list backward, a clever three-step approach:
// 01.Find the Middle: Use a slow and fast pointer to locate the midpoint of the list.
// 02.Reverse the Second Half: Flip the direction of the nodes in the second half so it can be traversed both half of the list in a unified direction.
// 03.Calculate Sums: Iterate through both halves simultaneously, adding the twin values and tracking the maximum.

var listFromArray = (a) =>
  a.length ? new ListNode(a[0], listFromArray(a.slice(1))) : null;

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function pairSum(head) {
  var slow = head;
  var fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // At the end of the loop, slow pointer will be at the second middle point of an even-length linked list

  var prev = null;
  while (slow) {
    var next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }
  // At the end of the loop, curr will be the null value and prev will be last node of the list

  var maxSum = 0;
  while (prev !== null) {
    maxSum = Math.max(maxSum, head.val + prev.val);
    head = head.next;
    prev = prev.next;
  }

  return maxSum;
}

console.log(pairSum(listFromArray([5, 4, 2, 1])));
console.log(pairSum(listFromArray([4, 2, 2, 3])));
console.log(pairSum(listFromArray([1, 100000])));

// Time Complexity - O(n)
// Space Complexity - O(1)

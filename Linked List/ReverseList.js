// Leetcode - Problem List - Problem 206

// Intuition - keep next node of head with temp, update head.next with node we initialized, update node we initialized with head, update head with temp.

// Leetcode given definition of ListNode
// class ListNode {
//     constructor(val, next) {
//         this.val = val === undefined ? 0 : val;
//         this.next = next === undefined ? null : next;
//     }
// }
function reverseList(head) {
  var node = null;
  while (head) {
    var temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }
  return node;
}

console.log(reverseList([1, 2, 3, 4, 5]));
console.log(reverseList([1, 2]));
console.log(reverseList([]));

// Time Complexity - O(n)
// Space Complexity - O(1)

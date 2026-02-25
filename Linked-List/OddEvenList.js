// Leetcode - Problem List - Problem 328

// Intuition - The idea is to split the linked list into 2 : one containing all odd nodes and other containing all even nodes. And finally, attach the even node linked list at the end of the odd node linked list, To split the linked list into even nodes & odd nodes, traverse the linked list and keep connecting the consecutive odd nodes and even nodes (to maintain the order of nodes), Finally, insert all the even nodes at the end of the odd node list.

var listFromArray = (a) =>
  a.length ? new ListNode(a[0], listFromArray(a.slice(1))) : null;

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function oddEvenList(head) {
    if (!head || !head.next) return head;
    
    var odd = head;
    var even = head.next;
    var evenHead = even;

    while (even !== null && even.next !== null) {
        odd.next = even.next;
        odd = odd.next;

        even.next = odd.next;
        even = even.next;
    }

    odd.next = evenHead;

    return head;
}

console.log(oddEvenList(listFromArray([1, 2, 3, 4, 5])));
console.log(oddEvenList(listFromArray([2, 1, 3, 5, 6, 4, 7])));

// Time Complexity - O(n)
// Space Complexity - O(1)

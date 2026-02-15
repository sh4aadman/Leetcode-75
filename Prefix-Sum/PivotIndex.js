// Leetcode - Problem List - Problem 724

// Intuition - First calculate the total sum, then subtract the leftSum and the value at the index itself from the total sum, if both equals thats the pivot index.
function pivotIndex(nums) {
  var totalSum = 0;
  var leftSum = 0;

  for (var i = 0; i < nums.length; i++) totalSum += nums[i];

  for (var i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));

// Time Complexity - O(n)
// Space Complexity - O(1)

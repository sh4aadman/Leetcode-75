// Leetcode - Problem List - Problem

// Intuition - Sliding window approach for this problem, The main invariant here is Number of zeros <= k,keep a zeroCount, and for each new zero, we would update the zeroCount, If the zeroCount ever becomes > k, shrink the window from the left and reduce the zeroCount as well until it becomes <= k.

function longestOnes(nums, k) {
  var start = 0;
  var max_w = 0;
  var num_zero = 0;
  for (var end = 0; end < nums.length; end++) {
    if (nums[end] === 0) num_zero++;
    while (num_zero > k) {
      if (nums[start] === 0) num_zero--;
      start++;
    }
    var w = end - start + 1;
    max_w = Math.max(max_w, w);
  }
  return max_w;
}

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2));
console.log(
  longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
);

// Time Complexity - O(n)
// Space Complexity - O(1)

// Leetcode - Problem List - Problem 1493

// Intuition - Keep a window and keep adding elements as long as the count of 0s doesn't exceed one, Once the number of 0s exceeds one, shrink the window from the left side till the count of 0 comes under the limit; then, compare the size of the current window with the longest subarray found.

function longestSubarray(nums) {
  var start = 0;
  var num_zero = 0;
  var max_w = 0;
  for (var end = 0; end < nums.length; end++) {
    if (nums[end] === 0) {
      num_zero++;
    }
    while (num_zero > 1) {
      if (nums[start] === 0) num_zero--;
      start++;
    }
    max_w = Math.max(max_w, end - start);
  }
  return max_w;
}

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
console.log(longestSubarray([1, 1, 1]));

// Time Complexity - O(n)
// Space Complexity - O(1)

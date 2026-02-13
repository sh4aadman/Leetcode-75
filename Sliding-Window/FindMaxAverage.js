// Leetcode - Problem List - Problem 643

// Intuition - Start by summing the first k elements, Slide the window across the array, Track the maximum sum seen, Divide final max sum by k to get the average.

function findMaxAverage(nums, k) {
  var sum = 0;
  for (var i = 0; i < k; i++) sum += nums[i];
  var maxSum = sum;
  for (var j = k; j < nums.length; j++) {
    sum += nums[j] - nums[j - k];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
}

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([9, 7, 3, 5, 6, 2, 0, 8, 1, 9], 6));
console.log(findMaxAverage([0, 4, 0, 3, 2], 1));

// Time Complexity - O(n)
// Space Complexity - O(1)

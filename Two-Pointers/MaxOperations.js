// Leetcode - Problem 1679

// Approach 01
// Intuition - Sort the array & have two pointers, one start from very begining & another from the end of the array. Now we gonna get the sum, and move pointers based on condition.
function maxOperations(nums, k) {
  nums.sort((a, b) => a - b);
  var left = 0,
    right = nums.length - 1,
    count = 0;
  while (left < right) {
    var sum = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum > k) right--;
    else left++;
  }

  return count;
}

// console.log(maxOperations([1, 2, 3, 4], 5));
// console.log(maxOperations([3, 1, 3, 4, 3], 6));

// Time Complexity - O(nlogn)
// Space Complexity - O(1)

// Approach 02
// Intuition - use MAP, fill the map as frequency map, get the result by subtracting current value from k & whatever result we get, check in the map. If that is present, increment the count & remove it from the map now.
function maxOperations2(nums, k) {
  var map = new Map();
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    var res = k - nums[i];
    if (map.has(res)) {
      count++;
      if (map.get(res) === 1) map.delete(res);
      else map.set(res, map.get(res) - 1);
    } else map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  return count;
}

console.log(maxOperations2([1, 2, 3, 4], 5));
console.log(maxOperations2([3, 1, 3, 4, 3], 6));

// Time Complexity - O(n)
// Space Complexity - O(1)

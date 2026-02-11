// Leetcode - Problem 334

// Intuition - Two Gates Approach (Greedy) - initiate two variables as Infinity, then first evaluate the smallest value, then the larger value, and the third will come automatically.

function increasingTriplet(nums) {
  var first = Infinity,
    second = Infinity;
  for (var num of nums) {
    if (num <= first) first = num;
    else if (num <= second) second = num;
    else return true;
  }
  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]));
console.log(increasingTriplet([5, 4, 3, 2, 1]));
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));

// Time Complexity - O(n)
// Space Complexity - O(1)

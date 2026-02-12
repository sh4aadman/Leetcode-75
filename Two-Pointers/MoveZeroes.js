// Leetcode - Problem 283

// Intuition -

function moveZeroes(nums) {
  for (var write = 0, i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      swap(nums, write++, i);
    }
  }
  return nums;
}

function swap(nums, a, b) {
  return ([nums[a], nums[b]] = [nums[b], nums[a]]);
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

// Time Complexity - O(n)
// Space Complexity - O(1)

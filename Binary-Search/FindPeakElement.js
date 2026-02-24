// Leetcode - Problem List - Problem 162

// Intuition - Even though the array isn't fully sorted, but a "slope" always leads to a peak.

function findPeakElement(nums) {
    var start = 0;
    var end = nums.length - 1;
    while (start < end) {
        var middle = start + Math.floor((end - start) / 2);
        if (nums[middle] < nums[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    return start;
}

console.log(findPeakElement([1, 2, 3, 1]));
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

// Time Complexity - O(logn)
// Space Complexity - O(1)

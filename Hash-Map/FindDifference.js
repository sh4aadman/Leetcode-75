// Leetcode - Problem List - Problem 2215

// Intuition - Using hash map, to check for the occuring elements in both arrays.
// function findDifference(nums1, nums2) {
//   return [getFirstList(nums1, nums2), getFirstList(nums2, nums1)];
// }

// function getFirstList(arr1, arr2) {
//   var nums2 = new Set(arr2);
//   var onlyNums1 = new Set();

//   for (var elm of arr1) {
//     if (!nums2.has(elm)) onlyNums1.add(elm);
//   }

//   return Array.from(onlyNums1);
// }

function findDifference(nums1, nums2) {
  var dict1 = new Set(nums1);
  var dict2 = new Set(nums2);
  nums1.forEach((num) => dict2.delete(num) && dict1.delete(num));
  return [[...dict1], [...dict2]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([1, 2, 3, 3], [1, 1, 2, 2]));

// Time Complexity - O(n + m)
// Space Complexity - O(n + m)

// One-Liner
// const getDiff = (a, b) => {
//     const setB = new Set(b);
//     return [...new Set(a.filter(x => !setB.has(x)))];
// };

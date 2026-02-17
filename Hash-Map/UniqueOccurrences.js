// Leetcode - Problem List - Problem 1207

// Intuition - Create an unordered map to store the frequency of each element in the array, Create an unordered set to store unique frequencies, Check if the size of the map is equal to the size of the set, If they are equal means that the occurrences of frequencies are unique.

function uniqueOccurrences(arr) {
  var freq = new Map();
  for (var elm of arr) {
    freq.set(elm, (freq.get(elm) || 0) + 1);
  }
  var set = new Set(freq.values());
  return freq.size === set.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2]));
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));

// Time Complexity - O(n)
// Space Complexity - O(n)

// Leetcode - Problem List - Problem 1732

// Intuition - Summing up the altitude from the 0Th point (altitude = 0) to the every point of the altitude gain, and returning the max altitude along the way.
function largestAltitude(gain) {
  var sumAlt = 0;
  var maxAlt = 0;
  for (var i = 0; i < gain.length; i++) {
    sumAlt += gain[i];
    maxAlt = Math.max(maxAlt, sumAlt);
  }
  return maxAlt;
}

console.log(largestAltitude([-5, 1, 5, 0, -7]));
console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));

// Time Complexity - O(n)
// Space Complexity - O(1)

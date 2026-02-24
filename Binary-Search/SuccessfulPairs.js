// Leetcode - Problem List - Problem 2300

// Intuition - Iterate through the potions array and check if the product of the spell strength and the potion strength is greater than or equal to the success value. If it is, we can increment a counter for that spell. We can then return the counters as an array.

function successfulPairs(spells, potions, success) {
  potions.sort((a, b) => a - b);
  const m = potions.length;
  const result = new Array(spells.length);

  for (let i = 0; i < spells.length; i++) {
    const spell = spells[i];
    // Minimum potion needed
    const need = Math.ceil(success / spell);

    // Binary search: first index with potions[idx] >= need
    let start = 0,
      end = m - 1,
      idx = m;
    while (start <= end) {
      const middle = (start + end) >> 1;
      if (potions[middle] >= need) {
        idx = middle;
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    }

    result[i] = m - idx;
  }

  return result;
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
console.log(successfulPairs([3, 1, 2], [8, 5, 8], 16));

// Time Complexity - O(nlogn + mlogm)
// Space Complexity - O(n)

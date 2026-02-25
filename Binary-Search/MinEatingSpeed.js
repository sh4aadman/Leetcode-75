// Leetcode - Problem List - Problem 875

// Intuition - The minimum speed is 1 banana per hour, The maximum speed needed is the size of the largest pile (since eating more than that doesn't save any extra time on that pile), For a given speed (middle), calculate total hours and binary search for the optimum speed.

function minEatingSpeed(piles, h) {
  var canFinish = (k) => {
    var hours = 0;
    for (var pile of piles) {
      hours += Math.ceil(pile / k);
    }
    return hours <= h;
  };
  var start = 1;
  var end = Math.max(...piles);
  while (start < end) {
    var middle = Math.floor((start + end) / 2);
    if (canFinish(middle)) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  // return start; both are correct
  return end;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));

// Time Complexity - O(n * log(maxPile))
// Space Complexity - O(1)

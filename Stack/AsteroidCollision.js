// Leetcode - Problem List - Problem 735

// Intuition - Using stack to keep asteroids, For each asteroid, the absolute value represents its size, and the sign represents its direction, If two asteroids meet, the smaller one will explode [10, -2] -> [10], If both are the same size, both will explode [5, -5] -> [], Two asteroids moving in the same direction will never meet [10, 2] -> [10, 2].

function asteroidCollision(asteroids) {
  var stack = [];

  for (var i = 0; i < asteroids.length; i++) {
    var current = asteroids[i];
    var isDestroyed = false;

    while (stack.length > 0 && current < 0 && stack[stack.length - 1] > 0) {
      var top = stack[stack.length - 1];

      if (Math.abs(current) > top) {
        stack.pop();
        continue;
      } else if (Math.abs(current) === top) {
        stack.pop();
        isDestroyed = true;
        break;
      } else {
        isDestroyed = true;
        break;
      }
    }

    if (!isDestroyed) {
      stack.push(current);
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5]));
console.log(asteroidCollision([8, -8]));
console.log(asteroidCollision([10, 2, -5]));
console.log(asteroidCollision([3, 5, -6, 2, -1, 4]));

// Time Complexity - O(n)
// Space Complexity - O(n)

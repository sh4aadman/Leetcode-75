// Leetcode - Problem List - Problem 2390

// Intuition - * will only affect the characters before it. The input s works like tapping and * works like the deletion action.

function removeStars(s) {
  var stack = [];

  for (var char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}

console.log(removeStars("leet**cod*e"));
console.log(removeStars("erase*****"));
console.log(removeStars("*"));

// Time Complexitty - O(n)
// Space Complexitty - O(n) [stack] / O(1) [without-stack]

// Two Pointer Approach
function removeStars(s) {
  var arr = s.split("");
  var write = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      write--;
    } else {
      arr[write++] = arr[i];
    }
  }
  return arr.slice(0, write).join("");
}

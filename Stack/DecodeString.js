// Leetcode - Problem List - Problem 394

// Intuition - Since there can have nested structures (e.g., 3[a2[c]]), it's needed a way to remember the "outer" strings and numbers while it's finished processing the "inner" ones. This follows a Last-In, First-Out (LIFO) pattern, making a Stack the perfect data structure.

function decodeString(s) {
  var countStack = [];
  var strStack = [];
  var currStr = "";
  var k = 0;

  for (var char of s) {
    if (!isNaN(char)) {
      k = k * 10 + parseInt(char);
    } else if (char === "[") {
      countStack.push(k);
      strStack.push(currStr);
      currStr = "";
      k = 0;
    } else if (char === "]") {
      var repeatCount = countStack.pop();
      var prevStr = strStack.pop();
      currStr = prevStr + currStr.repeat(repeatCount);
    } else {
      currStr += char;
    }
  }

  return currStr;
}

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));

// Time Complexity - O(n)
// Space Complexity - O(n)

// Leetcode - Problem List - Problem 394

// Intuition -

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

// Time Complexity - O()
// Space Complexity - O()

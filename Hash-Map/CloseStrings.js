// Leetcode - Problem List - Problem 1657

// Intuition - The strings must be the same length, must contain the exact same unique characters, word1 has a 'z' and word2 doesn't, they can never be close, sorted list of frequencies must be identical.

function closeStrings(word1, word2) {
  var m = word1.length;
  var n = word2.length;
  if (m !== n) return false;
  var freq1 = new Array(26).fill(0);
  var freq2 = new Array(26).fill(0);
  for (var i = 0; i < m; i++) {
    freq1[word1.charCodeAt(i) - 97]++;
    freq2[word2.charCodeAt(i) - 97]++;
  }
  for (var i = 0; i < 26; i++) {
    if (
      (freq1[i] === 0 && freq2[i] !== 0) ||
      (freq1[i] !== 0 && freq2[i] === 0)
    )
      return false;
  }
  freq1.sort((a, b) => a - b);
  freq2.sort((a, b) => a - b);
  for (var i = 0; i < 26; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
}

console.log(closeStrings("abc", "bca"));
console.log(closeStrings("a", "aa"));
console.log(closeStrings("cabbba", "abbccc"));

// Time Complexity - O(n) -- O(26log26) -- max alphabet size 26
// Space Complexity - O(n) -- O(26) -- counts for atmost 26 unique characters
// Low level approach is more performance optimized, as it uses Uint32Array, bitmasks, and basic math operations to compare counts. (No garbage collection, Direct indexing)

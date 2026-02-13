// Leetcode - Problem List - Problem 1456

// Intuition - Slide a window of size k across the string, adding the new character on the right and removing the old one from the left.

function maxVowels(s, k) {
  var vowels = new Set(["a", "e", "i", "o", "u"]);
  var currentVowels = 0,
    maxVowels = 0;
  for (var i = 0; i < k; i++) {
    if (vowels.has(s[i])) currentVowels++;
  }
  maxVowels = currentVowels;
  for (var j = k; j < s.length; j++) {
    if (maxVowels === k) return maxVowels;
    if (vowels.has(s[j])) currentVowels++;
    if (vowels.has(s[j - k])) currentVowels--;
    maxVowels = Math.max(maxVowels, currentVowels);
  }
  return maxVowels;
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));

// Time Complexity - O(n)
// Space Complexity - O(1)

// Leetcode - Problem 443

// Intuition - Using two pointer to read and write, read will read the sequence and determine whether the current character is occuring or not, and write will write the encoding, first the character itself and then the length of the sequence. If the length is higher than 10, the subsequence digits will be encoded individually (like 12 will be encoded as "1", "2").

function compress(chars) {
  var write = 0,
    i = 0;

  while (i < chars.length) {
    var character = chars[i];
    var count = 0;

    while (i < chars.length && chars[i] === character) {
      i++;
      count++;
    }

    chars[write++] = character;

    if (count > 1) {
      for (var digit of String(count)) {
        chars[write++] = digit;
      }
    }
  }

  return write;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]));
console.log(compress(["a"]));
console.log(
  compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
);

// Time Complexity - O(n)
// Space Complexity - O(1)

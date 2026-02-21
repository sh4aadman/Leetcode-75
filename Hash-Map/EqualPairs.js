// Leetcode - Problem List - Problem 2352

// Intuition - The problem asks to find the number of pairs where a row and a column are identical, a hash map can be used to store the frequency of each unique row, Then iterate through each column, construct its fingerprint, and check if that fingerprint exists in the hash map.

function equalPairs(grid) {
  var length = grid.length;
  var count = 0;
  var rowMap = new Map();

  for (var i = 0; i < length; i++) {
    var rowKey = grid[i].join(",");
    rowMap.set(rowKey, (rowMap.get(rowKey) || 0) + 1);
  }

  for (var j = 0; j < length; j++) {
    var colArray = [];
    for (var i = 0; i < length; i++) {
      colArray.push(grid[i][j]);
    }
    var colKey = colArray.join(",");

    if (rowMap.has(colKey)) {
      count += rowMap.get(colKey);
    }
  }

  return count;
}

console.log(
  equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7],
  ]),
);
console.log(
  equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2],
  ]),
);

// Time Complexity - O(n ^ 2)
// Space Complexity - O(n ^ 2)

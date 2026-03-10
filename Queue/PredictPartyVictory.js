// Leetcode - Problem List - Problem 649

// Intuition - To play optimally, a senator should always ban the next available opponent, By banning the opponent who would have voted soonest, the senator prevents an immediate threat to their own party, Since the voting is round-based and circular, the most efficient way to solve this is by using two Queues to track the indices of the senators.

function predictPartyVictory(senate) {
  var n = senate.length;
  var radiant = [];
  var dire = [];

  for (var i = 0; i < n; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  while (radiant.length > 0 && dire.length > 0) {
    var radiantVoter = radiant.shift();
    var direVoter = dire.shift();

    if (radiantVoter < direVoter) {
      radiant.push(radiantVoter + n);
    } else {
      dire.push(direVoter + n);
    }
  }

  return radiant.length > 0 ? "Radiant" : "Dire";
}

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));

// Time Complexity - O(n)
// Space Complexity - O(n) [two-queue/ban-debt] / O(1) [in-place]

// Opttimized Ban Debt Approach
function predictPartyVictory(senate) {
  var queue = senate.split("");
  var radiantBanDebt = 0;
  var direBanDebt = 0;

  var radiantCount = 0;
  var direCount = 0;
  for (var char of queue) {
    if (char === "R") {
      radiantCount++;
    } else {
      direCount++;
    }
  }

  while (radiantCount > 0 && direCount > 0) {
    var current = queue.shift();

    if (current === "R") {
      if (radiantBanDebt > 0) {
        radiantBanDebt--;
        radiantCount--;
      } else {
        direBanDebt++;
        queue.push("R");
      }
    } else {
      if (direBanDebt > 0) {
        direBanDebt--;
        direCount--;
      } else {
        radiantBanDebt++;
        queue.push("D");
      }
    }
  }

  return radiantCount > 0 ? "Radiant" : "Dire";
}

// Two-Pointer In-Place Approach
function predictPartyVictory(senate) {
  var queue = senate.split("");
  var radiantBanDebt = 0;
  var direBanDebt = 0;

  var radiantCount = 0;
  var direCount = 0;

  for (var char of queue) {
    if (char === "R") radiantCount++;
    else direCount++;
  }

  var i = 0;
  while (radiantCount > 0 && direCount > 0) {
    if (queue[i] === "R") {
      if (radiantBanDebt > 0) {
        queue[i] = "X";
        radiantBanDebt--;
        radiantCount--;
      } else {
        direBanDebt++;
      }
    } else if (queue[i] === "D") {
      if (direBanDebt > 0) {
        queue[i] = "X";
        direBanDebt--;
        direCount--;
      } else {
        radiantBanDebt++;
      }
    }
    i = (i + 1) % queue.length;
  }

  return radiantCount > 0 ? "Radiant" : "Dire";
}

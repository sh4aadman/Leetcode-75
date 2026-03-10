// Leetcode - Problem List - Problem 933

// Intuition - Since the timestamps are always increasing, it can be treated the incoming requests as a stream, Every new ping(t) is added to the end of our "line" (the queue), Because time moves forward, any timestamp in the queue that is smaller than [t - 3000] is now "expired", Since the queue is sorted, these expired timestamps will always be at the very front, Once the old requests are removed, the current size of the queue is the answer.

class RecentCounter {
  constructor() {
    this.requests = [];
  }

  ping(t) {
    this.requests.push(t);

    var minTime = t - 3000;

    while (this.requests[0] < minTime) {
      this.requests.shift();
    }

    return this.requests.length;
  }
}

// Explanation
var recentCounter = new RecentCounter();
console.log(recentCounter.ping(1)); // requests = [1], range is [-2999,1], return 1
console.log(recentCounter.ping(100)); // requests = [1, 100], range is [-2900,100], return 2
console.log(recentCounter.ping(3001)); // requests = [1, 100, 3001], range is [1,3001], return 3
console.log(recentCounter.ping(3002)); // requests = [1, 100, 3001, 3002], range is [2,3002], return 3

// Time Complexity - O(1) [amortized]
// Space Complexity - O(w) [w is the size of the window (3000ms)]

// Pointer-Based Implementation (Optimized)
class RecentCounter {
  constructor() {
    this.requests = [];
    this.head = 0;
  }

  ping(t) {
    this.requests.push(t);

    while (this.requests[this.head] < t - 3000) {
      this.head++;
    }

    return this.requests.length - this.head;
  }
}

// Circular Buffer Approach
class RecentCounter {
  constructor() {
    this.capacity = 10000;
    this.requests = new Int32Array(this.capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  ping(t) {
    this.requests[this.head] = t;
    this.head = (this.head + 1) % this.capacity;
    this.size++;

    while (this.size > 0 && this.requests[this.tail] < t - 3000) {
      this.tail = (this.tail + 1) % this.capacity;
      this.size--;
    }

    return this.size;
  }
}

# Code Challenge: Functions and Variables

---

## Instructions

1. Clone down this assignment to your `tip-challenges` directory.
2. `cd` into the assignment and run the command `npm i`
3. Write your solution in JavaScript in the `index.js` file
4. Run the tests with the command `npm test`
5. By the end of class, **commit and push your changes up to Github.**
6. Using the browser, verify that your solution is in your remote repo on Github.

---

## Problem Description

You are given an integer array `nums` consisting of `n` elements, and an integer `k`.

Find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value. Any answer with a calculation error less than 10<sup>-5</sup> will be accepted.

### Example 1

**Input:**
```javascript
nums = [1,12,-5,-6,50,3], k = 4
```

**Output:**
```
12.75000
```

**Explanation:** Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

### Example 2

**Input:**
```javascript
nums = [5], k = 1
```

**Output:**
```
5.00000
```

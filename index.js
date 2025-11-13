/**
 * Find the maximum average value of a contiguous subarray of length k
 *
 * Time Complexity:
 * Space Complexity:
 *
 * @param {number[]} nums - An integer array consisting of n elements
 * @param {number} k - The length of the contiguous subarray
 * @return {number} - The maximum average value
 */
function findMaxAverage(nums, k) {
    let maxAvg = -Infinity
    let sum = 0
    for (let i = 0; i < k ; i++) {
        sum += nums[i]
    }
    maxAvg = sum/k

    for (let i = 0; i < nums.length - k; i++) {
        sum -= nums[i]
        sum += nums[i + k]
        if (sum/k > maxAvg) {
            maxAvg = sum/k
        }
    }
    return maxAvg
}

module.exports = findMaxAverage;

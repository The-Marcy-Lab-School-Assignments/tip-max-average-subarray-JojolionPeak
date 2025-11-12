/**
 * Brute Force Solution
 * 
 * Time Complexity: 
 * Space Complexity:
 * 
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage(nums, k) {
    let maxAverage = -Infinity;
    
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        
        const average = sum / k;
        if (average > maxAverage) {
            maxAverage = average;
        }
    }
    
    return maxAverage;
}

module.exports = findMaxAverage;


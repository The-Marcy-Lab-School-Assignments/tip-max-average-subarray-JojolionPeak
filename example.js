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

/**
 * Time Complexity : O(N*K)
 *
 *
 *
 *
 */
function findMaxAverage(nums, k) {
    let maxAverage = -Infinity;

    for (let i = 0; i <= nums.length - k; i++) {
        //loops through array length - k because j goes through to the last 3 spots in arr
        let sum = 0;
        //creating a sum variable
        for (let j = i; j < i + k; j++) {
            //loop through the 3 elements bc k = 3
            sum += nums[j];
            // add value at each index to sum variable
        }

        const average = sum / k;
        // create an average variable
        if (average > maxAverage) {
            //if avg > -inf
            maxAverage = average;
            // then change max to avg
        }
    }

    return maxAverage;
}

module.exports = findMaxAverage;

/* https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

643. Maximum Average Subarray I

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 

Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000
 

Constraints:

n == nums.length
1 <= k <= n <= 105
-104 <= nums[i] <= 104

*/

const findMaxAverage = (nums, k) => {
    let maxSum = 0
    let currentSum = 0

    for (let i = 0; i < k; i++) {
        currentSum += nums[i]
    }
        maxSum = currentSum

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i-k]
        maxSum = Math.max(maxSum, currentSum)
    }

    return maxSum / k
    
};

/* more time efficient, worse storage
const findMaxAverage = (nums, k) => {
    let maxAvg = 0
    let currentSum = 0
    let currentAvg = 0

    for (let i = 0; i < k; i++) {
        currentSum += nums[i]
    }
        currentAvg = currentSum / k
        maxAvg = currentAvg

    for (let i = k; i < nums.length; i++) {
        currentSum += nums[i] - nums[i-k]
        currentAvg = currentSum / k
        maxAvg = Math.max(maxAvg, currentAvg)
    }

    return maxAvg
    
};
*/
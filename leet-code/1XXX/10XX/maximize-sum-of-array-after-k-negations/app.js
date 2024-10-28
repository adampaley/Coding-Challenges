/* https://leetcode.com/problems/maximize-sum-of-array-after-k-negations/description/

1005. Maximize Sum of Array After K Negations

Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.

 

Example 1:

Input: nums = [4,2,3], k = 1
Output: 5
Explanation: Choose index 1 and nums becomes [4,-2,3].
Example 2:

Input: nums = [3,-1,0,2], k = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].
Example 3:

Input: nums = [2,-3,-1,5,-4], k = 2
Output: 13
Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].
 

Constraints:

1 <= nums.length <= 104
-100 <= nums[i] <= 100
1 <= k <= 104
*/

// recursive, turns out not performant
// const largestSumAfterKNegations = (nums, k) => {
//     if (k>0) {
//         let index = nums.findIndex((x) => x === Math.min(...nums))
//         nums[index] *= -1
//         k--
//         return largestSumAfterKNegations(nums, k)
//     }
    
//     let sum = nums.reduce((acc, cur) => {
//         return acc + cur
//     }, 0)

//     return sum
// }

// let nums = [4,2,3]
// console.log(largestSumAfterKNegations(nums, 2))

// while loop, better stroage but still slow
// const largestSumAfterKNegations = (nums, k) => {
//     if (k%2 === 1) {
//         let index = nums.findIndex((x) => x === Math.min(...nums))
//         nums[index] *= -1
//     }
    
//     let sum = 0

//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }

//     return sum
// }

// sort method more performant
const largestSumAfterKNegations = (nums, k) => {
    nums.sort((a, b) => a - b)
    if (k>0) {
        nums[0] *= -1
        k--
        return largestSumAfterKNegations(nums, k)
    }
    
    let sum = nums.reduce((acc, cur) => {
        return acc + cur
    }, 0)

    return sum
}

let nums = [4,2,3]
console.log(largestSumAfterKNegations(nums, 2))
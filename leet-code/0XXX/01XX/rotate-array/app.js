/* https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
189. Rotate Array
Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

Follow up:

Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
Could you do it in-place with O(1) extra space?
*/
// in-line
const rotate = (nums, k) => {
    if (!nums || !k) return nums
    if (k > nums.length) {
        k = k - (nums.length * Math.floor(k/nums.length))
    }
    return nums.splice(0,0, ...nums.splice(nums.length - k))
};

// not in-line
// const rotate = (nums, k) => {
//     if (!nums) return nums
//     if (k > nums.length) {
//         k = k - (nums.length * Math.floor(k/nums.length))
//     }
//     return nums.splice(nums.length - k).concat(nums)
//     // return (nums.join('').slice(nums.length-k) + nums.join('').slice(0, nums.length-k)).split('').map((x) => Number(x))
// };

nums = [1,2,3,4,5,6,7]
k = 3
console.log(rotate(nums, k))
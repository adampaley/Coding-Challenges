/* https://leetcode.com/problems/valid-mountain-array/

941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

 

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

*/


// recursive, took too long per leetcode

// const downTheMountain = (arr) => {
//     if (arr.length === 1) return true
//     if (arr[0] <= arr[1]) return false
//     if (arr[0] > arr[1]) return downTheMountain(arr.slice(1))
// }

// const upTheMountain = (arr) => {
//     if (arr.length === 1) return false
//     if (arr[0] < arr[1]) {
//         return upTheMountain(arr.slice(1))
//     } else {
//         return downTheMountain(arr)
//     }
// }

// const validMountainArray = (arr) => {
//     if (arr.length < 3 || arr[0] >= arr[1] || arr[arr.length - 1] <= arr[arr.length - 2]) return false
//     return upTheMountain(arr)
// };


// chunky but functioning code

// const downTheMountain = (arr) => {
//     if (arr.length === 1) return true
//     if (arr[0] <= arr[1]) return false
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i+1]) {
//             continue
//         } else if (arr[i+1] === undefined) {
//             return downTheMountain(arr.slice(i))
//         }
//     }
// }

// const upTheMountain = (arr) => {
//     if (arr.length === 1) return false

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i] < arr[i+1]) === undefined ) return false
//         if (arr[i] < arr[i+1]) {
//             continue
//         } else if (arr[i] > arr[i+1]) {
//             return downTheMountain(arr.slice(i))
//         } else if (arr[i] === arr[i+1]) {
//             return false
//         } else if (arr[i+1] === undefined) {
//             return false
//         } 
//     } 
// }

// const validMountainArray = (arr) => {
//     if (arr.length < 3) return false
//     if (arr[0] >= arr[1]) return false
//     return upTheMountain(arr)
// };

// console.log(validMountainArray([[3,5,5]]))


// recursive but with pop instead of slice to go from O(N) to O(1)
const downTheMountain = (arr) => {
    if (arr.length === 1) return true
    if (arr[arr.length - 1] <= arr[arr.length - 2]) return false
    if (arr[arr.length - 1] > arr[arr.length - 2]) {
    arr.pop()
    return downTheMountain(arr)
    }
}

const upTheMountain = (arr) => {
    if (arr.length === 1) return false
    if (arr[arr.length - 1] < arr[arr.length - 2]) {
        arr.pop()
        return upTheMountain(arr)
    } else {
        return downTheMountain(arr)
    }
}

const validMountainArray = (arr) => {
    if (arr.length < 3) return false
    if (arr[0] >= arr[1]) return false
    if (arr[arr.length - 1] >= arr[arr.length - 2]) return false

    return upTheMountain(arr)
};


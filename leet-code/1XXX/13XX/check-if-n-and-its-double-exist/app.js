/* Check if N and Its Double Exist 
https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

Given an array arr of integers, check if there exist two indices i and j such that :

i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
 

Example 1:

Input: arr = [10,2,5,3]
Output: true
Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
Example 2:

Input: arr = [3,1,7,11]
Output: false
Explanation: There is no i and j that satisfy the conditions.
 

Constraints:

2 <= arr.length <= 500
-103 <= arr[i] <= 103

*/

const checkIfExist = (arr) => {

    if (arr.length === 1) {
        return false
    }
    
    for (let j = 1; j < arr.length; j++) {
      if (arr[0] === arr[j] * 2 || arr[0] === arr[j] / 2) {
          return true
      }
    } 
    return checkIfExist(arr.slice(1))
};

checkIfExist([7,1,14,11])

// attempt at a map method, fails if there are two 0s in an array
/* 
const checkIfExist = (arr) => {
    const doubleArr = arr.map((num) => num * 2)
    const halfArr = arr.map((num) => num /2)
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) continue
        if (doubleArr.includes(arr[i]) || halfArr.includes(arr[i]) {
            return true
        }
    }
    return false
};
*/
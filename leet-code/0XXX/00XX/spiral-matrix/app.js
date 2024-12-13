/* https://leetcode.com/problems/spiral-matrix/description/
54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 10
-100 <= matrix[i][j] <= 100
*/

const unravelTheSpiral = (matrix, output) => {
    
    if (matrix.length === 0) return output
    output.push(...matrix.shift())

    if (matrix.length === 0) return output
    for (let i = 0; i < matrix.length - 1; i++) {
        if (matrix[i][0] === undefined) return output
        output.push(matrix[i].pop())
    }

    if (matrix.length === 0) return output
    output.push(...matrix.pop().reverse())

    if (matrix.length === 0) return output
    for (let i = matrix.length - 1; i > 0; i--) {
        if (matrix[i][0] === undefined) return output
        output.push(matrix[i].shift())
    }
    return unravelTheSpiral(matrix, output)
} 

const spiralOrder = (matrix) => {
    let output = []
    return unravelTheSpiral(matrix, output)
};
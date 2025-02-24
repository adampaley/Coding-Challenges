'''
https://leetcode.com/problems/rotate-image/description/
48. Rotate Image

You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:


Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:


Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
 

Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 20
-1000 <= matrix[i][j] <= 1000
'''

class Solution:
    def rotate(self, matrix):
        self.matrix = matrix
        [left, top, right, bottom] = [0, 0, len(matrix)-1, len(matrix)-1]

        while (top < bottom):
            shift = 0
            while (left + shift < right):
                [new_bottom_right, new_bottom_left, new_top_left, new_top_right] = [matrix[top + shift][right], matrix[bottom][right - shift], matrix[bottom - shift][left], matrix[top][left + shift]]

                matrix[top + shift][right] = new_top_right
                matrix[bottom][right - shift] = new_bottom_right
                matrix[bottom - shift][left] = new_bottom_left
                matrix[top][left + shift] = new_top_left
                shift += 1
            top += 1
            bottom -= 1
            left += 1
            right -= 1
'''
https://leetcode.com/problems/find-unique-binary-string/description/?envType=daily-question&envId=2025-02-20
1980. Find Unique Binary String

Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

 

Example 1:

Input: nums = ["01","10"]
Output: "11"
Explanation: "11" does not appear in nums. "00" would also be correct.
Example 2:

Input: nums = ["00","01"]
Output: "11"
Explanation: "11" does not appear in nums. "10" would also be correct.
Example 3:

Input: nums = ["111","011","001"]
Output: "101"
Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
 

Constraints:

n == nums.length
1 <= n <= 16
nums[i].length == n
nums[i] is either '0' or '1'.
All the strings of nums are unique.

'''

class Solution:
    import random
    def findDifferentBinaryString(self, nums):
        self.s = set(nums)
        self.num = ""
        while (self.s):
            while (len(self.num) < len(nums[0])):
              self.num += "0" if random.random() < 0.5 else "1"
            if self.num not in self.s:
                break
            else:
                self.num = "" 
        return self.num       
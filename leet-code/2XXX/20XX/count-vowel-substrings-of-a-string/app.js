/* https://leetcode.com/problems/count-vowel-substrings-of-a-string/description/

2062. Count Vowel Substrings of a String

A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.

 

Example 1:

Input: word = "aeiouu"
Output: 2
Explanation: The vowel substrings of word are as follows (underlined):
- "aeiouu"
- "aeiouu"
Example 2:

Input: word = "unicornarihan"
Output: 0
Explanation: Not all 5 vowels are present, so there are no vowel substrings.
Example 3:

Input: word = "cuaieuouac"
Output: 7
Explanation: The vowel substrings of word are as follows (underlined):
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
- "cuaieuouac"
 

Constraints:

1 <= word.length <= 100
word consists of lowercase English letters only.

*/

const countVowelSubstrings = (word) => {
    const vowelSet = new Set(['a','e','i','o','u'])
    let counter = 0
    let left = 0
    
    while( left < word.length) {
        if (!vowelSet.has(word[left])) {
            left++
            continue
        }

    let right = left
    const substringSet = new Set()
    
        while (right < word.length && vowelSet.has(word[right])) {
            substringSet.add(word[right])
        
            if (substringSet.size === 5) (
                counter++
            )

            right++
        }

    left++ 
    }

    return counter
}
/* https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

Detect Panagram

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

const isPangram = (string) => {
    string = string.toLowerCase().split('').filter((str) => str.toLowerCase() !== str.toUpperCase())
    let letterObj = {}
    for (let letter of string) {
      if (letterObj[letter]) {
        letterObj[letter] ++
      } else {
        letterObj[letter] = 1
      }
    }
  
    if (Object.keys(letterObj).length === 26) return true
    return false  
  }
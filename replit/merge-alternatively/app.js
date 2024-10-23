// https://replit.com/@GSometimes/Merge-Strings-Alternatively-Starter#index.js

// Directions

// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternatively = (word1, word2) => {
    // Declare a variable to store the merged string
    let mergedString = ''
    // Declare a variable to store the length of the longer string
    let longerStringLength = 0
        if (word1.length > word2.length) {
          longerStringLength = word1.length
        } else {
          longerStringLength = word2.length
        }
    // Iterate through strings, adding adding character to the merged string 
    for (let i = 0; i <= longerStringLength; i++) {
        mergedString += word1.charAt(i) + word2.charAt(i)
    }
    return mergedString
}
  
  console.log(mergeAlternatively('abc', 'pqr')); // apbqcr
  console.log(mergeAlternatively('ab', 'pqrs')); // apbqrs
  console.log(mergeAlternatively('abcd', 'pq')); // apbqcd

/* 

Can also determine the longest word using Math.max(word1.length, word2.length)
*/
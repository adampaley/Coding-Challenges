// https://replit.com/@GSometimes/Plus-One-Starter#index.js

// Directions

// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// PSEUDOCODE HERE

// const plusOne = (digits) => {    // YOUR CODE GOES HERE
//     let digitString = ""
//     let digitNumber = 0
//     let digitArray = []
//     for (let i = 0; i < digits.length; i++) {
//         digitString += digits[i] // concatanate digits to string
//     }
//     digitNumber = parseFloat(digitString) + 1 // convert to number and add one
//     digitString = digitNumber.toString() // convert back to string
//     for (let i = 0; i < digitString.length; i++) {
//         digitArray.push(digitString.charAt(i)) // break up string by character, push to array
//     }
//     return digitArray
// }

// const plusOne = (digits) => {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++
//             return digits
//         } else if (digits[i] === 9) {
//             digits[i] = 0
//         }
//     }
//     digits.unshift(1)
//     return digits
// }

const plusOne = (digits) => {
    digits = digits.join('')
    digits++
    digits = digits.toString().split('').map((n) => Number(n))
    return digits
}
  
  console.log(plusOne([1, 2, 3])); // [ 1, 2, 4 ]
  console.log(plusOne([4, 3, 2, 1])); // [ 4, 3, 2, 2 ]
  console.log(plusOne([9])); // [ 1, 0 ]
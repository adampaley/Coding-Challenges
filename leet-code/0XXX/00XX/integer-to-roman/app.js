//leetcode.com/problems/integer-to-roman/description/
// 12. Integer to Roman
// Seven different symbols represent Roman numerals with the following values:

// Symbol	Value
// I	1
// V	5
// X	10
// L	50
// C	100
// D	500
// M	1000
// Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

// If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
// If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (I) less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
// Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times. If you need to append a symbol 4 times use the subtractive form.
// Given an integer, convert it to a Roman numeral.

// Example 1:

// Input: num = 3749

// Output: "MMMDCCXLIX"

// Explanation:

// 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
//  700 = DCC as 500 (D) + 100 (C) + 100 (C)
//   40 = XL as 10 (X) less of 50 (L)
//    9 = IX as 1 (I) less of 10 (X)
// Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places
// Example 2:

// Input: num = 58

// Output: "LVIII"

// Explanation:

// 50 = L
//  8 = VIII
// Example 3:

// Input: num = 1994

// Output: "MCMXCIV"

// Explanation:

// 1000 = M
//  900 = CM
//   90 = XC
//    4 = IV

/* Recursive function idea 

const checkNum = (num, rom) => {
    if (!num) return rom
    if (num - 1000 >= 0) {
        num -= 1000
        rom += 'M'
    } else if (num - 900 >= 0) {
        num -= 900
        rom += 'CM'
    } else if (num - 500 >= 0) {
        num -= 500
        rom += 'D'
    } else if (num - 400 >= 0) {
        num -= 400
        rom += 'CD'
    } else if (num - 100 >= 0) {
        num -= 100
        rom += 'C'
    } else if (num - 90 >= 0) {
        num -= 90
        rom += 'XC'
    } else if (num - 50 >= 0) {
        num -= 50
        rom += 'L'
    } else if (num - 40 >= 0) {
        num -= 40
        rom += 'XL'
    } else if (num - 10 >= 0) {
        num -= 10
        rom += 'X'
    } else if (num - 9 >= 0) {
        num -= 9
        rom += 'IX'
    } else if (num - 5 >= 0) {
        num -= 5
        rom += 'V'
    } else if (num - 4 >= 0) {
        num -= 4
        rom += 'IV'
    } else if (num - 1 >= 0) {
        num -= 1
        rom += 'I'
    }
    return checkNum(num, rom)
}

const intToRoman = (num) => {
    return checkNum(num, '') 
}
*/

// DRY version 
const checkNum = (num, rom) => {
    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const numeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    if (!num) return rom
    for (let i = 0; num > 0 ; i++) {
      if (num >= value[i]) {

        num -= value[i]
        rom += numeral[i]  
        return checkNum(num, rom)
      }
    }
}

const intToRoman = (num) => {
    return checkNum(num, '') 
}

console.log(intToRoman(1994))
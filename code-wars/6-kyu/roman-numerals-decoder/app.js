/* https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript

Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:
"MM"      -> 2000
"MDCLXVI" -> 1666
"M"       -> 1000
"CD"      ->  400
"XC"      ->   90
"XL"      ->   40
"I"       ->    1
Help:
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/
const solution = (roman) => {
  const numerals = {M: 1000, CM: 900, D:500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1}
  let val = 0
  for (let i = 0; i < roman.length; i++) {
    if (numerals[roman[i]] < numerals[roman[i+1]]) {
      val += numerals[`${roman[i]}${roman[i+1]}`]
      i++
    } else {
      val += numerals[roman[i]]
    }
  }
  return val
}
console.log(solution("MCML"))

// check every condition
// const convert = (str, num) => {
//     if (!str) return num
//     if (str[0] === "M") {
//       if (str[1] === "M") {
//         if (str[2] === "M") {
//           num += 3000 
//           return convert(str.slice(3), num)
//         }
//         num += 2000 
//         return convert(str.slice(2), num)
//       }
//       num += 1000
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "C" && str[1] === "M") {
//       num += 900
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "D") {
//       num += 500
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "C" && str[1] === "D") {
//       num += 400
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "C") {
//       if (str[1] === "C") {
//         if (str[2] === "C") {
//           num += 300 
//           return convert(str.slice(3), num)
//         }
//         num += 200 
//         return convert(str.slice(2), num)
//       }
//       num += 100
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "X" && str[1] === "C") {
//       num += 90
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "L") {
//       num += 50
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "X" && str[1] === "L") {
//       num += 40
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "X") {
//       if (str[1] === "X") {
//         if (str[2] === "X") {
//           num += 30 
//           return convert(str.slice(3), num)
//         }
//         num += 20 
//         return convert(str.slice(2), num)
//       }
//       num += 10
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "I" && str[1] === "X") {
//       num += 9
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "V") {
//       num += 5
//       return convert(str.slice(1), num)
//     }
//     if (str[0] === "I" && str[1] === "V") {
//       num += 4
//       return convert(str.slice(2), num)
//     }
//     if (str[0] === "I") {
//       if (str[1] === "I") {
//         if (str[2] === "I") {
//           num += 3 
//           return convert(str.slice(3), num)
//         }
//         num += 2 
//         return convert(str.slice(2), num)
//       }
//       num += 1
//       return convert(str.slice(1), num)
//     }
//   }
  
//   const solution = (roman) => {
//     return convert(roman, 0);
//   }
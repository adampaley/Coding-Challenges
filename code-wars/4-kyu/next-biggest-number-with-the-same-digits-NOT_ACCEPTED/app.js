/* https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

Next bigger number with the same digits

Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

const nextBigger = (n) => {
  let orig = n
  n = n.toString().split('').sort().join('')
  let permutationsOfN = []
  
  const permutation = (pre, rem) => {
  
    if (rem.length === 0) {
      pre = Number(pre)    
      permutationsOfN.push(pre)
      return 
    }

    const used = new Set()
  
    for (let i = 0; i < rem.length; i++) {
      if (used.has(rem[i])) continue
      used.add(rem[i])
      permutation(pre + rem[i], rem.slice(0,i)+rem.slice(i+1)) 
    }
  }
  
  permutation("", n)
  let index = permutationsOfN.findIndex((x) => x === orig)
  return permutationsOfN[index+1] ? permutationsOfN[index+1] : -1
}

console.log(nextBigger(414))

// works but timed out

// sort, remove duplicates, return value
// const sort = (com, tot, orig) => {
//     if (com.length === tot) {
//         com = com.sort((a, b) => a - b)
//         let uSet = new Set(com)
//         uSet = Array.from(uSet)
//         let index = uSet.findIndex((x) => x === orig)
//         if (uSet[index+1]) return uSet[index+1]
//         return -1
//     }
// }  

// const nextBigger = (n) => {
    
//     n = String(n)
//     let l = n.length
//     let permutationsOfN = []
    
//     // factorial recusion, used to get total permutations
//     const len = factorial = (m) => {
//       if (m < 0) {
//         return -1
//       } else if (m === 0) {
//         return 1
//       } else {
//         return (m * factorial(m - 1))
//       }
//     }

//     factorial(l)    
    
//     // run multiple (max i) permutations to get all combinations 
//     const permutation = (pre, rem) => {
    
//       if (rem.length === 0) {
//         pre = Number(pre)    
//         permutationsOfN.push(pre)
//         return 
//       }
    
//       for (let i = 0; i < rem.length; i++) {
//          permutation(pre + rem[i], rem.slice(0,i)+rem.slice(i+1)) 
//       }
//     }
    
//     permutation("", n, n)
//     n = Number(n)
//     return sort(permutationsOfN, len(l), n)
// }

// console.log(nextBigger(414))

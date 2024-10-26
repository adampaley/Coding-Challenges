/* https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

So Many Permutations

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!

*/


const permutations = (string) => {
	let arr = []
  const create = (pre, rem) => {
    if(rem.length === 0) {
      arr.push(pre)
      return
    }
    
    for (let i = 0; i < rem.length; i++) {
      create(pre + rem[i], rem.slice(0,i) + rem.slice(i+1))
    }
  }
  
  create("", string)
  let mySet = new Set(arr)
  mySet = Array.from(mySet)
  return mySet
}

/* refactor to remove duplicates prior
const permutations = (string) => {
	let arr = []
  const create = (pre, rem) => {
    if(rem.length === 0) {
      arr.push(pre)
      return
    }
    const used = new Set()

    for (let i = 0; i < rem.length; i++) {
      if (used.has(rem[i])) continue

      used.add(rem[i])
      create(pre + rem[i], rem.slice(0,i) + rem.slice(i+1))
    }
  }
  
  string = string.split('').sort().join('')
  create("", string)

  return arr
}
*/
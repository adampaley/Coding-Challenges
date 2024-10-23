/* https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

*/

const determineUnique = (str, arr) => {
  if (!str.length) return arr
  if (str[0] !== str[1]) arr.push(str[0])
  return determineUnique(str.slice(1), arr)
}
  
const uniqueInOrder = (iterable) => {
  let uniqueArr = []
  return determineUnique(iterable, uniqueArr)
}
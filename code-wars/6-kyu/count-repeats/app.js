// https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061/solutions/javascript

const countRepeats = (str) => {
    let count = 0
    for (let i = 0; i < str.length - 1; i++) {
      if (str[i] === str[i + 1]) count++
    }
    return count
}

/* optimization 
const checkMatch = (str, count) => {
  if(!str.length) return count
  if(str[0] === str[1]) {
      count++
  }
  return checkMatch(str.slice(1), count)
}

function countRepeats(str) {
  return checkMatch(str, 0)
}
*/
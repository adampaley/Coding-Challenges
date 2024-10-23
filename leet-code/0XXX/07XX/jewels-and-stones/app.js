// https://leetcode.com/problems/jewels-and-stones/description/

// Directions

// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".

/*
function numJewelsInStones(jewels, stones) {
    // Your Code Here...
}

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("zz", "ZZ")); // 0

*/

const numJewelsInStones = (jewels, stones) => {
    const jewelArr = jewels.split("")
    const stoneArr = stones.split("")
    let jewelsInStones = 0
    stoneArr.forEach((stone) => {
        if (jewelArr.includes(stone)) {
            jewelsInStones++
        }
    })
    return jewelsInStones
}

const numJewelsInStones2 = (jewels, stones)

console.log(numJewelsInStones("aA", "aAAbbbb")); // 3
console.log(numJewelsInStones("zz", "ZZ")); // 0

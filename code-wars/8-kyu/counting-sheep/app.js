/* https://www.codewars.com/kata/54edbc7200b811e956000556

Counting Sheep

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

// recursive method

const addSheep = (sheep, count) => {
    if(!sheep.length) return count
    if(sheep[0]) count++
    sheep.splice(0,1)
    return addSheep(sheep, count) 
}


const countSheeps = (sheep) => {
    let isSheep = 0
    return addSheep(sheep, isSheep)
}


// JS iterator method

// const countSheeps = (sheep) => {
//     return sheep.filter((Boolean)).length
// }

// Object based approach

// const countSheeps = (sheep) => {
//
//     let sheepObj = sheep.reduce((acc, curr) => {
//         acc[curr] ? acc[curr]++ : acc[curr] = 1
//         return acc
//     }, {})

//     for (let sheep in sheepObj) {
//         console.log(sheep)
//         if (sheep === "true") {
//             return sheepObj[sheep]
//         }
//     }

//     return 0
// }


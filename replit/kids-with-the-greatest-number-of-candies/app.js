// https://replit.com/@GSometimes/Kids-With-The-Greatest-Number-Of-Candies-Starter#index.js

// Directions

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Pseudocode Goes Here

// const kidsWithCandies = (candies, extraCandies) => {
//     let candyThreshold = ""
//     let kidsWithMostCandies = []
//     candies.sort((a,b) => a - b)
//     candyThreshold = candies[candies.length - 1]

//     candies.forEach((kid) => {
//         if ((kid + extraCandies) >= candyThreshold) {
//             kid = true
//             kidsWithMostCandies.push(kid)
//         } else {
//             kid = false
//             kidsWithMostCandies.push(kid)
//         }
//     })
//     return kidsWithMostCandies
// }

const kidsWithCandies = (candies, extraCandies) => {
    const candyThreshold = Math.max(...candies) // need spread on an array for math.max
    const kidsWithMostCandies = []

    candies.forEach((kid) => {
        kidsWithMostCandies.push((kid + extraCandies) >= candyThreshold) // comparison in push will return a boolean value
    })
    return kidsWithMostCandies
}
  
  console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // [true,true,true,false,true]
  console.log(kidsWithCandies([4, 2, 1, 1, 2], 1)); // [true,false,false,false,false]
  console.log(kidsWithCandies([12, 1, 12], 10)); // [true,false,true]
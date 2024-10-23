// https://replit.com/@GSometimes/Single-Number-Starter#index.js

// Directions

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

const singleNumber = (nums) => {
    // nums.sort((a,b) => a - b)
    // let uniqueVariable = nums[0]
    // for (let i = 1; i < nums.length; i+=2) {
    //      if (uniqueVariable !== nums[i]) {
    //         return uniqueVariable
    //     } // else {
    //     //     uniqueVariable = nums[i+2]
    //     //     console.log(i)
    //         // console.log(nums[i+2])
    //     // }
    // }

    // for (let i = 0; i < nums.length; i++) {
    //      if (nums[i] === nums[i+1]) {
    //         continue
    //     } else {
    //         return nums[i]
    //     }
    // }

    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length -1; i+=2) {
        if (nums[i] !== nums[i+1]) {
            return nums[i]
        } 
    }

    return nums[nums.length - 1]

    // const tally = nums.reduce((acc, num) => {
    //     if (acc[num]) {
    //         acc[num]++
    //     } else {
    //         acc[num] = 1
    //     }
    //     return acc
    // }, {})

    // for (const int in tally) {
    //     if (tally[int] === 1) {
    //         return int
    //     }
    // }


    // let uniqueVariable = nums[0]
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums.includes(uniqueVariable))

//     let uniqueVariable = nums[0]
//     for (let i = 0; i < nums.length; i++) {
//         if (uniqueVariable !== nums[i]))
//   
    // const filteredArr = nums.filter((num))


}
  
  console.log(singleNumber([2, 2, 1])); // 1
  console.log(singleNumber([4, 1, 2, 1, 2])); // 4
  console.log(singleNumber([1])); // 1
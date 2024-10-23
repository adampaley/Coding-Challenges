// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/javascript

// paired programming, initial code

// const parse = (data) => {
//   let output = 0
//   let resultArr = []
//   for(let i = 0; i < data.length; i++) {
//     if(data[i] === 'i'){
//       output++
//     } else if(data[i] === 'd'){
//       output--
//     } else if(data[i] === 's'){
//       output*=output
//     } else if(data[i] === 'o'){
//       resultArr.push(output)
//     }
//   }
//   return resultArr
// }

// making code more performant

const actionChars = {i: true, d: true, s: true, o: true}
const modifyArr = (resultArr, char) => {
    switch(char) {
        case "i" :
            resultArr[resultArr.length-1]++
            break
        case "d" :
            resultArr[resultArr.length-1]--
            break
        case "s" :
            resultArr[resultArr.length-1]+=resultArr[resultArr.length-1]
            break
        case "o" :
            resultArr.push(resultArr[resultArr.length-1]++)
            break
    }
}

const parse = (data) => {
    let resultArr = [0] 
    for (let i =0;  i < data.length; i++) {
        if (!actionChars[data[i]]) {
            continue
        }
        modifyArr(result, data[i])
    }
    return resultArr.slice(0,resultArr.length - 1)
}
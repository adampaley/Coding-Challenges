/* https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

RGB to Hex Conversion

The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"

*/


// working but bulky code
const rgb = (r, g, b) => {
    if (r > 255) r = 255
    if (r < 0) r = 0
    if (g > 255) g = 255
    if (g < 0) g = 0
    if (b > 255) b = 255
    if (b < 0) b = 0
    
    let rx = Math.floor(r/16).toString()
    let ry = (r%16).toString()
    let gx = Math.floor(g/16).toString()
    let gy = (g%16).toString()
    let bx = Math.floor(b/16).toString()
    let by = (b%16).toString()

    let midConversionValues =  [rx, ry, gx, gy, bx, by]

    const conversionObj = {
        10: "A",
        11: "B",
        12: "C",
        13: "D",
        14: "E",
        15: "F",
    }  
    let hex = ""

    midConversionValues.forEach((value) => {
        if (value >= 10) {
            for (const conversion in conversionObj) {
                if (value === conversion) {
                    hex += conversionObj[conversion]
                    break
                } else {
                    continue
                }
            }
        } else {
            hex += value
        }  
    })
    return hex

}

// attempt to dry
// const rgb = (r, g, b) => {
//     let col = [r, g, b].map(c => Math.min(255, Math.max(0, c))).toString()

//     [rx, ry, gx, gy, bx, by]
//     let rx = Math.floor(r/16).toString()
//     let ry = (r%16).toString()
//     let gx = Math.floor(g/16).toString()
//     let gy = (g%16).toString()
//     let bx = Math.floor(b/16).toString()
//     let by = (b%16).toString()

//     let midConversionValues =  [rx, ry, gx, gy, bx, by]

//     const conversionObj = {
//         10: "A",
//         11: "B",
//         12: "C",
//         13: "D",
//         14: "E",
//         15: "F",
//     }  
//     let hex = ""

//     midConversionValues.forEach((value) => {
//         if (value >= 10) {
//             for (const conversion in conversionObj) {
//                 if (value === conversion) {
//                     hex += conversionObj[conversion]
//                     break
//                 } else {
//                     continue
//                 }
//             }
//         } else {
//             hex += value
//         }  
//     })
//     return hex

// }

// console.log(rgb(2334, 0, 0))
// https://www.codewars.com/kata/65128732b5aff40032a3d8f0

/* Neutralisation
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Worked Example
("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.
Examples
("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"

*/

const neutralisation = (str1, str2) => {
    let str3 = ""
    for (let i = 0; i <= str1.length - 1; i++) {
        if (str1[i] === str2[i]) {
            str3 += str1[i]
        } else {
            str3 += "0"
        }
    }
    return str3
}

/* recursive
const handleNeutralise = (str1, str2, str3) => {
    if (str1[0] === str2[0]) {
        str3 += str1[0]
    } else {
        str3 += "0"
    }
  
    if (str1.length === 1) return str3
    return handleNeutralise(str1.slice(1), str2.slice(1), str3)
}

const neutralise = (str1, str2) => {
    let str3 = ""
    return handleNeutralise(str1, str2, str3)
}
*/


console.log(neutralisation("-++-", "-+-+"))
console.log(neutralisation("--++--", "++--++"))
console.log(neutralisation("-+-+-+", "-+-+-+"))
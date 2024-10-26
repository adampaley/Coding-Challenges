/* https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

const pigIt = (str) => {
    return str = str.split(' ').map((x) => x.toLowerCase() !== x.toUpperCase() ? x.slice(1) + x.slice(0,1)+"ay" : x.slice(1) + x.slice(0,1)).join(' ')
}
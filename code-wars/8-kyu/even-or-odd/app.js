/* https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript

Even of Odd

Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

const evenOrOdd = (number) => {
    return number%2 ? "Odd" : "Even"
}
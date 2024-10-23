/* https://www.codewars.com/kata/5672a98bdbdd995fad00000f
Rock Paper Scissors!
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!"
    if ((p1.toLowerCase() === "rock" && p2.toLowerCase() === "scissors") 
        || (p1.toLowerCase() === "paper" && p2.toLowerCase() === "rock") 
        || (p1.toLowerCase() === "scissors" && p2.toLowerCase() === "paper")) {
        return `Player 1 won!`
    } else {
        return `Player 2 won!`
    }
};
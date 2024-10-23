/* https://www.codewars.com/kata/57d29ccda56edb4187000052

Rock Paper Scissors Lizard Spock

In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

Scissors cuts Paper
Paper covers Rock
Rock crushes Lizard
Lizard poisons Spock
Spock smashes Scissors
Scissors decapitates Lizard
Lizard eats Paper
Paper disproves Spock
Spock vaporizes Rock
Rock crushes Scissors

Task:
Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".

Inputs
Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".
*/

const winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"]
}

const rpsls = (pl1,pl2) => {
    if (pl1 === pl2) return "Draw!" 
    for (let move in winConditions) {
        if (move === pl1 && winConditions[move].includes(pl2)) return "Player 1 Won!"
    }
    return "Player 2 Won!"
}

// cleaned up version
/*
const rpsls = (pl1,pl2) => {
    if (pl1 === pl2) return "Draw!" 
  
    const winConditions = {
      rock: ["scissors", "lizard"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      lizard: ["paper", "spock"],
      spock: ["scissors", "rock"]
    }
    
    return winConditions[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!"
}
    */
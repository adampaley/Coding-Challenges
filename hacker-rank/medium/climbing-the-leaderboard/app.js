/* https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem?isFullScreen=true

Climbing the Leaderboard

An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

The player with the highest score is ranked number 1 on the leaderboard.
Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.

Example

ranked = [100,90,90,80]
player = [70,80,105]

The ranked players will have ranks 1, 2, 2, and 3, respectively. If the player's scores are 70, 80 and 105, their rankings after each game are 4th, 3rd and 1st. Return [4,3,1].

Function Description

Complete the climbingLeaderboard function in the editor below.

climbingLeaderboard has the following parameter(s):

* int ranked[n]: the leaderboard scores
* int player[m]: the player's scores
Returns

* int[m]: the player's rank after each new score
Input Format

The first line contains an integer n, the number of players on the leaderboard.
The next line contains n space-separated integers ranked[i], the leaderboard scores in decreasing order.
The next line contains an integer, m, the number games the player plays.
The last line contains m space-separated integers player[j], the game scores.

Constraints
* 1 <= n <= 2 <= 10^5
* 1 <= m <= 2 <= 10^5
* 0 <= ranked[i] <= 10^9 for 0 <= i < n 
* 0 <= player[j] <= 10^9 for 0 <= j < m 
* The existing leaderboard, ranked, is in descending order.
* The player's scores, player, are in ascending order.

Subtask

For 60% of the maximum score:
* 1 <= n <= 200
* 1 <= m <= 200

*/

/*
const climbingLeaderboard = (ranked, player) => {
    let mySet = [...new Set(ranked)]
    let playerRankings = []

    for (let i = 0; i < player.length; i++ ) {
        let j = 0
        while (mySet[j]) {
            if (player[i] >= mySet[j]) {
                playerRankings.push(j+1)
                break
            } 
            j++
        }
        if (playerRankings.length <= i) {
            playerRankings.push(j+1)
        } 

    }
    return playerRankings    
}
*/

const climbingLeaderboard = (ranked, player) => {
    let mySet = [...new Set(ranked)]
    let playerRankings = []
    let j = mySet.length - 1

    for (let i = 0; i < player.length; i++ ) {
        while (mySet[j] && player[i] >= mySet[j]) {
            j--
        } 
        playerRankings.push(j+2)
    }
    return playerRankings    
}

console.log(climbingLeaderboard([100,100,50,40,40,20,10], [5, 25, 30, 50, 120, 190]))
// [100, 50, 40, 20, 10]
// function climbingLeaderboard(ranked, player) {
//     // Write your code here
//     let uniqueRanked = [...new Set(ranked)];
//     let playerRanks = [];
//     let rankIndex = uniqueRanked.length - 1;

//     for (let score of player) {
//         console.log(rankIndex)
//         while (rankIndex >= 0 && score >= uniqueRanked[rankIndex]) {
//             rankIndex--;
//         }
//         playerRanks.push(rankIndex + 2);
//     }
    
//     return playerRanks;
// }
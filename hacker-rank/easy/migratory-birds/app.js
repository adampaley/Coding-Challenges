/* https://www.hackerrank.com/challenges/migratory-birds/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

Example

arr = [1,1,2,2,3]

There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

Function Description

Complete the migratoryBirds function in the editor below.

migratoryBirds has the following parameter(s):

int arr[n]: the types of birds sighted

Returns
int: the lowest type id of the most frequently sighted birds

Input Format
The first line contains an integer, , the size of .
The second line describes  as  space-separated integers, each a type number of the bird sighted.

Constraints
5 <= n <= 2 * 10^5
It is guaranteed that each type is 1, 2, 3, 4, or 5.

Sample Input 0
6
1 4 4 4 5 3

Sample Output 0
4
*/

const migratoryBirds = (arr) => {
    let birdObj = {}
    
    for (let i = 0; i < arr.length; i++) {
        birdObj[arr[i]] = birdObj[arr[i]] + 1 || 1
    }
    
    let maxBird = 0
    for (let bird in birdObj) {
        if (birdObj[bird] > maxBird) {
            maxBird = birdObj[bird]
        }
    }
    
    let birdArr = []
    for (let bird in birdObj) {
        if (birdObj[bird] === maxBird) {
            birdArr.push(bird)
        }
    }

    if (birdArr.length > 1) {
        birdArr = birdArr.sort((a,b) => a - b)
    }
    
    return birdArr[0]
}

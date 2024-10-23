/* https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

A format for expressing an ordered list of integers is to use a comma separated list of either

* individual integers
* or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"

Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

*/

const recSol = (list, arr) => {
    if (!list.length) return arr.join()
    
    let startDig = list[0]
    let endDig

    for (let i = 1; i < list.length; i++) {
        if (startDig === list[i] - i) {
            endDig = list[i]
        } else {
            break
        }    
    }

    let arrSplice = (list.splice(list.indexOf(startDig), list.indexOf(endDig)+1)).length

    if (!arrSplice) {
        arr.push(startDig)
        list.splice(0,1) 
    } else if (arrSplice === 2) {
        arr.push(startDig, endDig)
    } else if (arrSplice > 2) {
        let range = `${startDig}-${endDig}`
        arr.push(range)
        list.splice(0, list.indexOf(endDig))
    }
    return recSol(list, arr)

}

const solution = (list) => {
    let rangeExt = []
    return recSol(list, rangeExt)
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))
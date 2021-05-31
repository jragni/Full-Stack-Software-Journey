/** Opposite Count
 * Write a method opposite_count that takes in an array of unique numbers. 
 * The method should return the number of pairs of elements that sum to 0.
 */

function opposite_count(array){
    let potentialAnswers = {}
    count = 0 
    for(let i = 0; i < array.length; i++){
        let potentialAns = 0 - array[i]
        if( potentialAns in potentialAnswers){
            count++;
        }else{
            potentialAnswers[array[i]] = potentialAns
        }
    }
    return count
}


console.log(opposite_count([ 2, 5, 11, -5, -2, 7 ])); // # => 2
console.log(opposite_count([ 21, -23, 24 -12, 23 ])); // # => 1
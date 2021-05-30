/**
 * Write a method doubler(numbers) that takes an array of numbers and returns a new array
 * where every element of the original array is multiplied by 2.
 */

// function doubler(numbers){
//     let ans = []
//     numbers.forEach(ele => {
//         ans.push(2 * ele)
//     });
//     return ans;
// }

function doubler(numbers){
    return numbers.map( ele => { return ele*2 });
}

console.log( doubler([1, 2, 3, 4])) // # => [2, 4, 6, 8]
console.log( doubler([7, 1, 8])   ) // # => [14, 2, 16]
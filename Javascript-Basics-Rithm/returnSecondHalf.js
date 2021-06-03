/** Return Second Half
 * Write a function that returns the second half of numbers array
 */
let numbers = [1,2,3,4,5,6,7,8,9,10];

function returnSecondHalf(numbers){
    return numbers.slice(numbers.length / 2 , numbers.length);
}

console.log(returnSecondHalf(numbers));


/** Return First Half
 * Create a function called returnFirstHalf which returns the first half of the numbers array
 */

let numbers = [1,2,3,4,5,6,7,8,9,10];

function returnFirstHalf(numbers){
    return numbers.slice(0, numbers.length / 2);
}

console.log(returnFirstHalf(numbers));
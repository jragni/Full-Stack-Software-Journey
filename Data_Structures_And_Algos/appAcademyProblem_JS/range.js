/**Range 
 * Write a method range(min, max) that takes in two numbers min and max. 
 * The method should return an array containing all numbers from min to max inclusive.
 */


function range(min, max){
    // initialize answer array
    // add numbers to answer array using a for loop
    let ans = []
    for(let i = min; i <= max; i++){
        ans.push(i);
    }

    return ans
}

console.log(range(2, 7)  ) // # => [2, 3, 4, 5, 6, 7]

console.log(range(13, 20)) // # => [13, 14, 15, 16, 17, 18, 19, 20]
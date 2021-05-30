/**Element Times Index
 *
 *   Write a method element_times_index(nums) that takes in an array of numbers a
 *   and returns a new array containing every number of the original array multiplied with its index.
 * 
 */

function element_times_index(nums){
    // walk the array
        // for each element, 
            //multiply the number with its index and push it to answerArray

    // return answerArray
    let answerArray = []
    nums.forEach( (ele, idx) =>{
        answerArray.push(ele*idx)
    });

    return answerArray
}

console.log( element_times_index([4, 7, 6, 5])     )  // => [0, 7, 12, 15]

console.log( element_times_index([1, 1, 1, 1, 1, 1])) // => [0, 1, 2, 3, 4, 5]
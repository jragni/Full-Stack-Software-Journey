/**
 *  Reverse Range 
 *  
 *  Write a method reverse_range(min, max) that takes in two numbers min and max.
 *  The function should return an array containing all numbers from min to max in reverse order. 
 *  The min and max should be excluded from the array.
 */


function reverse_range(min,max){
    // initialize an answer array
    // iterate through using a loop to shift numbers from min to max 
    ans = []
    for(let i = min + 1; i < max; i++){
        ans.unshift(i);
    }
    return ans;
}

console.log(reverse_range(10, 17) ) //# => [16, 15, 14, 13, 12, 11]
console.log(reverse_range(1, 7)   ) //# => [6, 5, 4, 3, 2]
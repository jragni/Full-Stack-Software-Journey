/**
 * Write a method sum_nums(max) that takes in a number max and returns 
 * the sum of all numbers from 1 up to and including max.
 * 
 */

function sum_nums(max){
    sum = 0
    for(let i = 1; i <= max; i++){
        sum += i;
    }
    return sum;
}

console.log( sum_nums(4)) // # => 10, because 1 + 2 + 3 + 4 = 10
console.log( sum_nums(5)) // # => 15
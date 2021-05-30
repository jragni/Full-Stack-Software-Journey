/** 
 * Factors Of
 * Write a method factors_of(num) that takes 
 * in a num and returns an array of all positive
 * numbers less than or equal to num that can divide num.
 */

function factors_of(num){
    let ans = [];

    for(let i = 1; i <= num; i++){
        if( num % i == 0){
            ans.push(i);
        }
    }

    return ans;
}


console.log(factors_of(3)  )// # => [1, 3]
console.log(factors_of(4)  )// # => [1, 2, 4]
console.log(factors_of(8)  )// # => [1, 2, 4, 8]
console.log(factors_of(9)  )// # => [1, 3, 9]
console.log(factors_of(16) )// # => [1, 2, 4, 8, 16]
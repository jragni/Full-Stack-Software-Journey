/**Even Nums
 * Write a method even_nums(max) that takes in a 
 * number max and returns an array containing all
 * even numbers from 0 to max
 */


function even_nums(max){

    ans = [];
    for(let i = 0; i <= max; i++){
        if(i%2 == 0){
            ans.push(i);
        }
    }

    return ans;
}


console.log( even_nums(10)) // # => [0, 2, 4, 6, 8, 10]
console.log( even_nums(5) ) // # => [0, 2, 4]
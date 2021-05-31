/**Write a method combinations that takes in an array of unique elements, 
 * the method should return a 2D array representing all
 *  possible combinations of 2 elements of the array.
 */

function combinations(array){
    let ans = []
    for(let i = 0; i < array.length - 1; i++){
        for(let j = i + 1; j<array.length; j++){
            ans.push([array[i],array[j]])
        }
    }
    return ans;
}


console.log(combinations(["a", "b", "c"]))//; # => [ [ "a", "b" ], [ "a", "c" ], [ "b", "c" ] ]
 
console.log(combinations([0, 1, 2, 3])); // # => [ [ 0, 1 ], [ 0, 2 ], [ 0, 3 ], [ 1, 2 ], [ 1, 3 ], [ 2, 3 ] ]
/** First Half
 * Write a method first_half(array) that takes in an array and 
 * returns a new array containing the first half of the elements in the array. 
 * If there is an odd number of elements, return the first half including the middle element. 
 */

function first_half(array){
    mid = array.length / 2.0;

    i = 0;
    ans = [] 
    while( i < mid){
        ans.push(array[i]);
        i++;
    }
    return ans;

}

console.log(first_half(["Brian", "Abby", "David", "Ommi"])) // # => ["Brian", "Abby"]
console.log(first_half(["a", "b", "c", "d", "e"])         ) // # => ["a", "b", "c"]
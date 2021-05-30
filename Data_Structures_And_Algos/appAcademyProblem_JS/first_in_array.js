/**
 *  First In Array
 * Write a method first_in_array that takes in
 *  an array and two elements, the method should return the 
 * element that appears earlier in the array.
 */

function first_in_array(array, el1, el2){

    array.forEach( (ele) => {
        if(ele == el1){
            return el1;
        }else if(ele == el2){
            return el2;
        }
    });


}
console.log(first_in_array(["a", "b", "c", "d"], "d", "b")); // # => "b"
console.log(first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse")) //; # => "dog"
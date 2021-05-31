/**
 *  First In Array
 * Write a method first_in_array that takes in
 *  an array and two elements, the method should return the 
 * element that appears earlier in the array.
 */

function first_in_array(array, el1, el2){

    // for(let i = 0; i < array.length; i++){
    //     if(el1 == array[i]){
    //         return el1;
    //     }else if( el2 == array[i]){
    //         return el2;
    //     }
    // }

    for(let ele of array){
        if(ele == el1){
            return el1
        }else if(ele == el2){
            return el2
        }
    }

    return null
}
console.log(first_in_array(["a", "b", "c", "d"], "d", "b")); // # => "b"
console.log(first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse")) //; # => "dog"
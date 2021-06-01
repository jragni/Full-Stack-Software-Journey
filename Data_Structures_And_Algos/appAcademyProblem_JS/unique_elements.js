/** Unique Elements
 * Write a method unique_elements that takes in an array and returns a new array where all duplicate elements are removed
 * solve using a hash
 */

function unique_elements(arr){
    let new_array = []
    let unique_element = {}
    arr.forEach( (ele)=> {
        if(!(ele in unique_element)){
            unique_element[ele] = 1
        }else{
            unique_element[ele] +=1
        }
    });

    for(key in unique_element){
        new_array.push(key)
    }
    return new_array
}


console.log(unique_elements(['a', 'b', 'a', 'a', 'b', 'c'])) ;// #=> ["a", "b", "c"]


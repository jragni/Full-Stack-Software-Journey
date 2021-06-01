/** Element Count
 * write a method element_count that takes in an array and returns a hash 
 * representing the count of each element in the array
 */

function element_count(array){
    // for each element in the array
        // store the element as a key in an object
        // if the key exists, iterate
        // else add the key and iterate

    let counts = {}
    array.forEach((ele)=>{
        if(counts[ele]){
            counts[ele] += 1
        }else{
            counts[ele] = 1;
        }
    });

    return counts;
}



console.log(element_count(["a", "b", "a", "a", "b"]))         //  #=> {"    a"=>3, "b"=>2}
console.log(element_count(["red", "red", "blue", "green"]))   //  #=> {"red"=>2, "blue"=>1, "green"=>1}
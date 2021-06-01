/** Element Replace
 * Write a method element_replace that takes in an array and a hash. The
 * method should return a new array where elements of the  aoriginal array are replaced with their corresponding values 
 * in the hash
 */

function element_replace(arr, hash){
    
    return arr.map( (ele) =>{
        return hash[ele] ? hash[ele] : ele;
    });

}

let arr1 = ["LeBron James", "Lionel Messi", "Serena Williams"]
let hash1 = {"Serena Williams":"tennis", "LeBron James":"basketball"}
console.log(element_replace(arr1, hash1) ) // # => ["basketball", "Lionel Messi", "tennis"]


let arr2 = ["dog", "cat", "mouse"]
let hash2 = {"dog":"bork", "cat":"meow", "duck":"quack"}
console.log(element_replace(arr2, hash2) ) // # => ["bork", "meow", "mouse"]

/* 
    This script is to practice the Technical Interview problems given
    by app academy.
*/


// Aba Translate


function aba_translate(string){
    // Method that takes in string, and returns a new string 
    // ex: "that cat is fat" -> "thabat cabat ibit fabat"
    let ans = ""
    const vowels = ["a","e","i","o","u","A","E","I","O","U"]
    // traverse the string
    for(let char of string){
        if(vowels.includes(char)){
            ans+= char+"b"+char;
        }else{
            ans += char;
        }
    }
    return ans;
}

let test1 = "That cat is fat";
console.log(aba_translate(test1));  // => thabat cabat ibis fabat

// Adjacent Sum

function adjacent_sum(array){
    // Description: adjacent_sum takes in an array and returns the new array containing adjacent number sums of orignal array elements
    // input: array 
    // output: array

    // example [3, 7, 2, 11] -> [10, 9 13]

    let ans =[];
    for(let i = 0; i<array.length-1; i++){
        ans.push(array[i]+array[i+1]);
    }
    return ans;
}


let test2 = [2, 5, 1, 9,2,4];

console.log(adjacent_sum(test2));  // => [7, 6, 10, 11, 6]


// Combinations

function combinations(array){
    //Description: combinations takes in an array of UNIQUE elements and returns a 2D array representing all combinations of 2 elements in an array

    /* Edge case 1: array is empty 
        -> return empty array
    
        Edge case 2: array has non-unique values
        -> throw error 
    */

    // edge case 1
    if(array.length===0){
        return [];   
    }
    //edge case 2
    let dict ={}
    for(let idx of array){
        if(idx in dict){
            throw "Array does not have all unique elements"
        }
    }

    /* ex: 
        [a, b, c] => [[a,b], [a,c],[b,c]
    */
    // traverse array
    let ans = []; 
    for(let i = 0; i<array.length-1;i++){
        for(j = i+1; j<array.length; j++){
            ans.push([array[i],array[j]]);
        }
    }
    return ans;

}

let test3 = ['a','b','c'];
console.log(combinations(test3));


// Element Replace

function element_replace(arr, obj){
    // Description: element_replace is a method that takes in an array and an object, and retrns a new array where elements of the original 
    // are replaced with their corresponding values

    // @input: array, object
    // @object: array 

    // we want to check the dictionary of obj and return the key in an array
    let ans = [];
    for(let idx of arr){
        // check if key is in the object 
        if(obj[idx]){
            ans.push(obj[idx]);
        }
        else{
            ans.push(idx);
        }
    }
    return ans;

}

let test4 = ["LeBron James","Lionel Messi","Serena Williams"]
let test4Obj = {"Serena Williams":"tennis","LeBron James":"basketball"};
let test4b = ["dog","cat","mouse"];
let test4bObj = {"dog":"bark", "cat":"meow", "duck":"quack"};
console.log(element_replace(test4,test4Obj));
console.log(element_replace(test4b,test4bObj));
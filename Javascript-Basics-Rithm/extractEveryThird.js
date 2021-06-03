/** Extract Every Third
* Write a function called extractEveryThird which accepts an array as a parameter. 
* The function should iterate over the array and return a new array
* with every 3rd element in the array passed to the function.
*/

function extractEveryThird(array){
    let ans = [];
    
    for(let i = 2; i < array.length; i+=2){
        ans.push(array[i]);
    }
    return ans;
}


console.log(extractEveryThird([1,2,3])); // [3]
console.log(extractEveryThird([1,2,3,4,5,6])); // [3,6]
console.log(extractEveryThird(["a","b","c","d"])); // ["c"]
console.log(extractEveryThird(["first value", "second value", "third value"])); // ["third value"]


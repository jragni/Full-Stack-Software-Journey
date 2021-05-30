/**Yell
 * 
 * Write a method yell(words) that takes in an array of words and returns a
 * new array where every word from the original array has an exclamation point after it.
 * 
 * 
 */

function yell(words){
    // map words and add an ! to the end of that word
    // return the array

    return words.map( ele => { return ele+"!" })

}

console.log( yell(["hello", "world"])     )//# => ["hello!", "world!"]
console.log( yell(["code", "is", "cool"]) ) // # => ["code!", "is!", "cool!"] 
/**Reverse
 * Write a method reverse(word) that takes in a string word 
 * and returns the word with its letters in reverse order.
 */


function reverse(word){

    return word.split("").reverse().join("")
}

console.log ( reverse("cat")        ) // # => "tac"
console.log ( reverse("programming")) // # => "gnimmargorp"
console.log ( reverse("bootcamp")   ) // # => "pmactoob"
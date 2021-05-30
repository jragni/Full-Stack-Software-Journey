
/** Is Palindrome
 * Write a method is_palindrome(word) that takes in a string word 
 * and returns the true if the word is a palindrome, false otherwise. 
 * A palindrome is a word that is spelled the same forwards and backwards. */

function isPalindrome(word){
    return word.split('').join('') == word.split('').reverse().join('');
}

console.log( isPalindrome("racecar")  ) // # => true
console.log( isPalindrome("kayak")    ) // # => true
console.log( isPalindrome("bootcamp") ) // # => false
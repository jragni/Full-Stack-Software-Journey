/** isPalindrome
 * write a function that checks if a string is a palindrome
 */

function isPalindrome(string){
    return string.split('').reverse().join('') == string
}

console.log(isPalindrome('testing')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('hannah')); // true
console.log(isPalindrome('robert')); // false

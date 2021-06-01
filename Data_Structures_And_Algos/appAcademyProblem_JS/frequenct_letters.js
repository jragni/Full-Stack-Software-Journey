/** Frequent Letters
 * 
 * Write a method frequent_letters that takes in a string and returns an array containing 
 * the characters that appeared more than twice in the string
 */

function frequent_letters(string){
    let ans = []
    let charCount = {}
    let chars = string.split('')
    chars.forEach((ele) =>{
        if(charCount[ele]){
            charCount[ele] += 1 
        }else{
            charCount[ele] = 1
        }
    });

    for(let char in charCount){
        if(charCount[char] > 2){
            ans.push(char);
        }
    }
    return ans;
}

console.log( frequent_letters('mississippi'))// #=> ["i", "s"]

console.log( frequent_letters('bootcamp'))// #=> []
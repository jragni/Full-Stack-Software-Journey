/** Abbreviate Sentence
 * Write a method abbreviate_sentence that takes in a sentence string and 
 * returns a new sentence where every word longer than 4 characters has all 
 * of it's vowels removed. 
 */

function abbreviate_sentence(string){
    let words = string.split(' ')
    let ans = []
    for(let word of words){
        if(word.length > 4){
            ans.push(newWord(word))
        }else{
            ans.push(word)
        }
    }
    return ans.join(" ")
}

function newWord(word){
    let vowels = 'aeiou'.split('')
    let chars = word.split('')
    let newString = ''
    for(let char of chars){
        if(!vowels.includes(char)){
            newString += char
        }
    }
    return newString
}

console.log(abbreviate_sentence("follow the yellow brick road"))// # => "fllw the yllw brck road"
console.log(abbreviate_sentence("what a wonderful life")       )// # => "what a wndrfl life"
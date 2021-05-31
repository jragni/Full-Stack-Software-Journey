/** Pig Latin Word
 * Write a method pig_latin_word that takes in a word string and translates the word into pig latin.
 */

function pig_latin_word(string){
    // if the first char is a vowel
        // append the word with yay 
    // otherwise move chars infront of the first vowel and add ay
    // return string

    let vowels = 'aeiouAEIOU'.split('')
    if( vowels.includes(string[0])){
        return string + "yay"
    }else{
        let chars = string.split('')
        for(let i in chars){
            if( vowels.includes(chars[i])){
                return string.slice(i,string.length) + string.slice(0,i) + "ay";
            }
        }
    }
}

console.log(pig_latin_word("apple") ) //  # => "appleyay"
console.log(pig_latin_word("eat")   ) //  # => "eatyay"
console.log(pig_latin_word("banana")) //  # => "ananabay"
console.log(pig_latin_word("trash") ) //  # => "ashtray"

/*
Write a method, count_vowels(word), that takes in a string word and returns the number of vowels in the word. Vowels are the letters a, e, i, o, u.
*/

function count_vowels(word){
    // initialize vowels
    // initialize variable for counts
    // walk the word 
        // if the character includes a vowel
            // iterate count
    // return count
    vowels = 'aeiouAEIOU'; 
    count = 0;
    for(let i = 0; i < word.length; i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}

console.log( count_vowels("bootcamp")) //  # => 3
console.log( count_vowels("apple")   ) //  # => 2
console.log( count_vowels("pizza")   ) //  # => 2
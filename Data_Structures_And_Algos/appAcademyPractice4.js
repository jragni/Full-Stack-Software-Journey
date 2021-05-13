function first_in_array(arr,el1,el2){
    let dict = {}  // key: element, value: index

    for(let i = 0; i<arr.length; i++){
        dict[arr[i]] = i;
    }
    console.log(dict)
    if(dict[el1] < dict[el2]){
        return el1;
    }else{
        return el2;
    }

}

console.log(first_in_array(["a", "b", "c", "d"], "d", "b"));   // => b
console.log(first_in_array( ["cat", "bird" ,"dog", "mouse" ], "dog", "mouse") );

let array =["cat", "bird" ,"dog", "mouse" ]

console.log(array.indexOf("cat"))

function abbreviate_sentence(string){
    // description: a sentence that takes in a string and abbreviates a word that is greater than 4 letters 
    // input: string 
    // output: string 

    let arr = string.split(' ');
    for(let word of arr){
        if(word.length > 4){
            arr[arr.indexOf(word)] = removeVowels(word);
        }
    }
    return arr.join(" ");

}

function removeVowels(word){
    let vowels = ["a","e","i","o","u","A","E",'I',"O","U"];
    let newWord = ""
    for(let i = 0;i<word.length;i++){
        if(!vowels.includes(word[i])){
            newWord+= word[i]
        }
    }
    return newWord;
}

console.log(abbreviate_sentence("follow the yellow brick road"));  // # => "fllw the yllw brck road"
console.log(abbreviate_sentence("what a wonderful life"))  //    => "what a wndrfl life"

function reverse_words(sent){
    let sentArr = sent.split(' ');
    for(let i = 0; i<sentArr.length;i++){
        let currentWord = sentArr[i];
        let char = currentWord.split('').reverse();
        sentArr[i] = char.join("");
    }
    return sentArr.join(' ')
}


console.log( reverse_words('keep coding'))

console.log( reverse_words('simplicity is prerequisite for reliability'))


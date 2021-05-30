/*

Count E

Write a method count_e(word) that takes in a string word and returns the number of e's in the word

*/

function countE(word){
    count = 0 
    word.split('').forEach(element => {
        if(element == 'e'){
            count += 1
        }
    });
    return count
}

console.log(countE('movie'))
console.log(countE('excellent'))
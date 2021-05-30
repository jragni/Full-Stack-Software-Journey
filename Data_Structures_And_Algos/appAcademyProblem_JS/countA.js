// Write a method countA that takes in a string word and reutrns the number of a's in the word for both upper and lower cases

function countA(string){

    // initialize a count variable
    // walk the string
    //  if the current element is an A or a 
        // increment count

    // return count


    count = 0
    for(let i = 0; i < string.length; i++){
        
        if(string[i] == 'a' || string[i] == 'A'){
            count += 1;
        }
    }
    return count; 
}


console.log(countA("application")) //  # => 2
console.log(countA("bike"))        // # => 0
console.log(countA("Arthur"))       // # => 1
console.log(countA("Aardvark"))     // # => 3
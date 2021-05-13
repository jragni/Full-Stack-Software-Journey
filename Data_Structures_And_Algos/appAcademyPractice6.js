// Advanced problems 
/*
pets = [
    {"type"=>"dog", "name"=>"Rolo"},
    {"type"=>"cat", "name"=>"Sunny"},
    {"type"=>"rat", "name"=>"Saki"},
    {"type"=>"dog", "name"=>"Finn"},
    {"type"=>"cat", "name"=>"Buffy"}
  ]
  print map_by_name(pets)

  */

  function map_by_name(arr){
    // description: method that takes in an array of hashes and returns a new array containing the names of each hash
    
    // input: arr <type array< type<dict> > >

    // get the value of each key value pair and return them in an array 
    const array = []
    for(element of arr){
        let currentValue = Object.values(element)
        array.push(currentValue[0])
    }
    return array
  }
  pets = [{"dog":"Rolo"},{"cat":"Sunny"},{"rat":"Saki"},{"dog":"Finn"},{"cat":"Buffy"}]
  console.log(map_by_name(pets))

  function map_by_key(arr){
    const array = []
    for(element of arr){
        let currentValue = Object.keys(element)
        array.push(currentValue[0])
    }
    return array
  }
  console.log(map_by_key(pets))


  function yell_sentence(sent){
      // Description: a method that returns a sentence given a string
      // Inputs: sent <type string>
      // Outputs: <type string>

      // split string into an array of words
      // for each element in the array, capitalize the letter and append a "!" 
      // return the joined array of strings
      let sentenceArr = sent.split(" ");

    //   for(let word of sentenceArr){
    //     newString += word.toUpperCase() + "!"
    //   }

    let newStringArr = sentenceArr.map( (word) => { return word.toUpperCase() + "!"}) 
    return newStringArr.join(" ")
      

  }

  console.log(yell_sentence("I have a bad feeling about this"))

function longestSubstringPalindrome(string){
    // Description: method that takes in a string and finds the longest palindrome in the string 
    let longestPalindromeSS = '';
    let longestPalindromeLength = 0;
    let currentSS =''
    // racecar -> ra, rac, race, racec, raceca, racecar
    // using previous function, check if is palindromei
        
    for(let i = 0; i<string.length;j++){
        for(let j = 0; j<string.length;j++){
            currentSS = string.slice(i,j);
            if(palindrome(currentSS) && currentSS.length > longestPalindromeLength){
                longestPalindromeLength = currentSS.length
                longestPalindromeSS = currentSS
            }
        }
    }
    return longestPalindromeSS;
}

console.log(longestSubstringPalindrome('racecar')) // racecar
console.log(longestSubstringPalindrome('rarrrrrasds')) // arrrrra
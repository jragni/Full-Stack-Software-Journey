

function to_initials(name){
    // description: a method that takes in a person's full name string and returns a string representing the initials

    // split the name into an array
    // for each name in the array I want to take the first letter of each name in that array
    // capitalize append it to another string
    let initials = ''
    let names = name.toUpperCase().split(' ')
    for(let nom of names){
        // add the first letter of each nom to a string
        initials+= nom[0];
    }

    return initials
}

console.log(to_initials("Kelvin Bridges") )
console.log( to_initials("Michaela Yamamoto"))
console.log(to_initials("Mary La Grange")  )


function first_in_array(arr, el1, el2){
    // Description: method that takes in an array with two elements of that array and returns the element that comes first
    // input: arr <type array>, el1 <type string>, el2 <type string>
    // ouput: <type string>

    // get the indices of each element
    // use a terniary to compare both indices and return the element of the lesser index
    let el1Idx = arr.indexOf(el1);
    let el2Idx = arr.indexOf(el2);
    return el1Idx < el2Idx ? arr[el1Idx] : arr[el2Idx]; 
}

console.log(first_in_array(["a", "b", "c", "d"], "d", "b"));
console.log(first_in_array(["cat", "bird" ,"dog", "mouse" ], "dog", "mouse"));

function abbreviate_sentence(sent){
    // Description: method that takes in a string and returns the string where every word longer than 4 characters has all of its vowels removed
    
    // split the sent string into an array 
    // for each word in sent array check length
    // if length is greater than 4
    // loop through word to create a new string without the vowels 
    // replace the new string with the string in the sent array
    // join the string array seperated by spaces

    let sentArray = sent.split(' ');
    for(let i = 0; i<sentArray.length;i++){
        let currentWord = sentArray[i];
        if(currentWord.lenght > 4){
            sentArray[i]= newWord(currentWord);
        }
    }
    return sentArray.join(" ")
}


function removeVowel(word){
    let vowels = ["a","e","i","o","u","A","E","I","O","U"];
    let newWord = ""
    for(let i = 0; i<word.length ; i++){
        if(!vowels.includes(word[i])){
            newWord += word[i]
        }
    }
    return newWord;
}

console.log(removeVowel("follow the yellow brick road"))
console.log(removeVowel("what a wonderful life"))


function format_name(str){
    // Description: method that takes in a string and returns the proper capitalization

    // split the string into an array
    // loop through th string in that array
    // capitlalize the first index
    // and set lowercase to the rest of the characters

    nameArray = str.split(" ");
    for(let i = 0; i< nameArray.length; i++){
        let currentName = nameArray[i].split("");
        //
        console.log(currentName)
        for(let j = 0; j< currentName.length; j++){
            if(j === 0){
                currentName[j] = currentName[j].toUpperCase()
            }else{
                currentName[j] = currentName[j].toLowerCase()
            }
        }
        nameArray[i] = currentName.join("")
    }
    return nameArray.join(" ")

}

console.log(format_name("chase WILSON") )
console.log(format_name("brian CrAwFoRd scoTT"))


function is_valid_name(str){
    // checks
    // 1. if the first letter of each name is capilized 

    //split string into array of names
    // for each name, check if the first letter of each name is capitalized 
        // if not, return false
        // check if the rest of the letters in the name are lower case
        //  if not return false


    let names = str.split(" ");
    if(names.length <2){
        return false;
    }
    for(let i = 0; i<names.length;i++){
        let word = names[i].split("");
        for(let j = 0; j<word.length; j++){
            if(j===0 && word[j] !== word[j].toUpperCase() ){
                return false
            }else if(j>0 && word[j] !== word[j].toLowerCase()){
                return false;
            }
        }
    }
    
    return true;
}

console.log(is_valid_name("Kush Patel") )
console.log(is_valid_name("Daniel") )
console.log(is_valid_name("Robert Downey Jr") )
console.log(is_valid_name("ROBERT DOWNEY JR") )




// rotate array

function rotate_arrayR(arr,num){
    // description: a method that takes an array and a number. The mthod returns an array after rotating the elements a specific number of times

    // traverse the array
    // create a new array and push the current element + num to the new array if the index is less than length array - 1
    let ans = []
    for(let i = 0; i< arr.length;i++){
        let idx = (num + i )%(arr.length)   // ex num = 2 i = 3 arr.length-1 == 3
        ans[i] = arr[idx]
    }

    return ans;
}

/// better implentation
function rotate_array(arr,num){
    // Description: take in an arraya and a number, it should return the elements shifted by number
    for(let i = 0; i<num;i++){
        let element = arr.pop()
        arr.unshift(element);
    }
    return arr
}

console.log(rotate_array([ "Matt", "Danny", "Mashu", "Matthias" ], 1) )
console.log(rotate_array([ "a", "b", "c", "d" ], 2) )

function opposite_count(nums){
    // Description: a method that takes in an array of unique numbers, returns the number of pairs of elements that sum to zero
    // input: nums <type array<type int>>
    // output: count <type int>
    let count = 0;
    for(let i = 0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == 0){
                count++;
            }
        }
    }

    return count;
}

function opposite_countV2(nums){
    // Description: a method that takes in an array of unique numbers, returns the number of pairs of elements that sum to zero
    // input: nums <type array<type int>>
    // output: count <type int>
    let dict = {}  // key: potential answer, value: element in the index 
    let count = 0;
    for(let i = 0; i<nums.length;i++){
        let potentialAns = 0 - nums[i];  //  nums[i] + potentialAns == 0
        if(potentialAns in dict){
            count++;
        }else{
            dict[nums[i]] = potentialAns;
        }
    }
    return count
}


console.log(opposite_countV2([ 2, 5, 11, -5, -2, 7 ]))
console.log(opposite_countV2([ 21, -23, 24 -12, 23 ]))
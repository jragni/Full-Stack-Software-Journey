
// problem 1

function reverseString(string){
    // Description: create a method that reverses string
    let ans = ''
    for(let i = string.length - 1; i >= 0; i--){
        ans+= string[i]
    }
    return ans;     
}

console.log(reverseString('hello'));


// problem 2D

function factorial(n){
    //Description: given n, return n factorial

    // recursively call function until base case n == 1
    if(n==1){
        return n;
    }else{
        return n*factorial(n-1);
    }
}

console.log(5*4*3*2*1===factorial(5));


// problem 3

function longestWord(sentence){
    //Description: method that takes a takes in a string and returns longest sentence
    sentence = sentence.split(' ');
    let ans = ''
    for(let word of sentence){
        if(word.length < sentence.length){
            ans = word;
        }
    }
    return ans;
}

console.log(longestWord("the dog ate a big steak")); //expected ==> steak

// problem 4

function sum(n){
    //Description: Method that returns the sum of all integers 0 to n
    let ans = 0;
    for(i=0;i<=n;i++){
        ans+=i;
    }
    return ans;

}
console.log(sum(7));
console.log(1+2+3+4+5+6+7 === sum(7));


// problem 5

function number2Time(num){
    //Description: Method that takes in a number of mins and returns string time
    // input: num [int]
    // output: string [hours:mins]
    // 70 mins -> 1 hours and  10
    let ans = '';
    let hours = Math.floor(num/60)
    let mins = num%60;  
    // edge cases
    if(mins<10){
        mins = '0'+mins;
    }
    ans = hours + ":" + mins;
    return ans 
}

console.log(number2Time(90)=== '1:30')
console.log(number2Time(360)==='6:00')


//problem 6

function numberOfVowels(string){
    //method that returns the number of voels in a string
    let ans = 0;
    string = string.toLowerCase();
    let vowels = ['a','e','i','o','u']

    for(let i = 0;i<string.length;i++){
        if(vowels.includes(string[i])){
            ans++
        }
    }
    return ans;
}

console.log(numberOfVowels('doggie') === 3); 

// problem 7 

function palindrome(string){
    // method that checks if word is a palindrome;
    let n = string.length - 1;
    for(let i = 0; i<string.length; i++){
        if(string[i]!==string[n]){
        
            return false;
        }
        n--;
    }
    return true;
}

console.log(palindrome('racecar'))

// problem 8

function zThreeLettersAfterA(string){
    // Description: method that takes in a string and returns true
    // if z appears 3 letterss after a

    //edge case 1: z is not in string
    string = string.split('');
    if(!string.includes('z')){
        return false;
    }
   
    // traverse string
    // if z, check if i + 1 i+2 or i+3 == a
    for(let i = 0; i < string.length; i++){
        if(string[i]=='z' && (string[i+1]==='a' || string[i+2]==='a' || string[i+3]==='a')){
            return true;
        }
    }
    return false;
}
console.log('--------')
console.log(zThreeLettersAfterA('zebra'))
console.log(zThreeLettersAfterA('zanzibar'))
console.log(zThreeLettersAfterA('zetoa'))

// problem 9

function sumsToZero(array){
    let dict = {}  // key: potential value: array
    for(let i = 0; i<array.length; i++){
        let potentialAns = 0 - array[i]
        if(dict[potentialAns] === array[i]){
            return [array[i], potentialAns]
        }else{
            dict[array[i]] = potentialAns
        }
    }
    return null;
}

console.log(sumsToZero([1,2,-1,3]));


// problem 10;

function isPowerOf2(num){
    //Description: method that takes in a number and checks if it is a power of 2

    // 2, 4, 8, 16.. 2^n == true
    // 24 -> 12 -> 6 -> 3
    while(num > 2){
        if(num%2 != 0){
            return false
        }else{
            num /=2;
        }
    }
    return true;
}
console.log('-----------')
console.log(isPowerOf2(24))
console.log(isPowerOf2(12))
console.log(isPowerOf2(16))

// problem 11;-------------

function thirdGreatestNum(array){
    //Description: method that returns the third greatest number in the array 
    // ex [1,3,12,15, 7, 16]  == > 12
    // implement selection sort
    for(let i =0; i<array.length; i++){
        let smallest = i;
        for(let j = i+1; j<array.length;j++){
            if(array[j]<array[smallest]){
                smallest = j;
            }
        }
        let temp = array[i]
        array[i] = array[smallest]
        array[smallest] = temp
    }
    return array[array.length-3]
    
}

console.log(thirdGreatestNum([1,3,12,15, 7, 16]))


// problem 12

function mostCommonLetter(string){
    // description: method that takes in a string and returns most common letter and count 

    let dict = {}
    // count how many of each letter is in the string
    for(let i = 0; i<string.length;i++){
        if(!dict[string[i]]){
            dict[string[i]]=1;
        }else{
            dict[string[i]]++;
        }
    }
    let greatest = 0;
    for(let key in dict){
        if(dict[key]>greatest){
            greatest = key
        }
    }

    return [greatest,dict[greatest]]
}

console.log(mostCommonLetter('appacademy'));

// problem 13
function dashes(num){
    // description: method that takes in a number and returns a string with dashes after every odd digit
    // exception cannot begin nor end with a string
    // ex: 12345 ==> 1,2,3,4,5
    let string = num.toString();
    let ans =''
    for(let i = 0; i<string.length; i++){
        if(i>0 && i<string.length-1 && i%2 != 0){
            ans+= '-'+string[i]+'-'
        }else{
            ans+=string[i];
        }
    }
    return ans;
}

console.log(dashes(12345))

// problem 14 ------------

function capitalizeFirstLetter(string){
    // description: method that takes in a string and capitalizes the first letter of each word

    let words = string.split(' ');
    let ans = ''
    for(let word of words){
        for(let i = 0; i<word.length;i++){
            if(i==0){
                ans += word[i].toUpperCase();
            }else{
                ans+= word[i]
            }
        }
        ans+=' ';
    }
    
    return ans;
   
}

console.log(capitalizeFirstLetter('let me join appAcademy'))

// problem 15

function switcheroo(string,indices){
    // Description: method that takes in a string and array of indices
    // to arrange the new string with respect to the indices in the Array

    //ex "America" [1,5,2,3,0,4,6] ==> [mcerAia]
    let ans ='';
    for(let i = 0;i<string.length; i++){
        ans+= string[indices[i]];
    }
    return ans;
}

console.log(switcheroo('America',[1,5,2,3,0,4,6]));

// problem 16

function isPrime(num){
    // Description: method that takes in a number and returns true if prime or false if not
    
    // if num == 1 or num == 0 , true
    if(num == 1 || num==0){
        return true;
    }
    for(let i = 2; i<num;i++){
        if(num%i == 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(29))

// problem 17 

function nthPrimeNumber(n){
    // Description: method that returns the nth prime number

    // ex 1,3,5,7,11,13, 17,    n = 5  ===> 11
    
    // generate an array of prime numbers
    // while the length is not n, continue to generate array
    // increment count 

    let arr = [];
    let count = 1;
    while(arr.length != n+1){
        console.log(arr)
        if(isPrime(count)){
            arr.push(count);
        }
        count++;
    }
    return arr[n]
}

console.log(nthPrimeNumber(5))

// problem 18

function longestSubstringPalindrome(string){
    // Description: method that takes in a string and finds the longest palindrome in the string 
    let longestPalindromeSS = '';
    let longestPalindromeLength = 0;
    let currentSS =''
    // racecar -> ra, rac, race, racec, raceca, racecar
    // using previous function, check if is palindromei
            
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

//problem 19

function greatestDividend(num1,num2){
    // Description: method that takes in two numbers, num1 and num2, and returdns the greates integer that divides both numbers evenly

    // 26,  10

    // deterimine the minimum number
    // for 1 to minimum number
        // modulo the iterator with both numbers
        // if it is greater than greatest integer  
            // replace the greatest integer

    // return greatest int

    let minimumNum = Math.min(num1,num2);
    let ans = 1;  // minimum number dividend for both num1 and num2
    for(let i = 1; i<=minimumNum; i++){
        if(num1%i == 0 && num2%i == 0 && i>ans){

            ans = i;
        }
    }
    return ans;
}
console.log('------------------')
console.log(greatestDividend(25,100));
console.log('------------------')
console.log(greatestDividend(104,988));


// problem 20

function alphabetShift(offset,string){
    // Description: method that takes in a string and shifts them by the offset amount

    // calculate offset amount
    offset = offset%26;  // offset is aliased after 26 

    // for each letter in the string
        // get the char code and add it by offset
        // if it is greater than 'z' value, shift to a
    // ans
    let ans = ''

    for(let i = 0;i<string.length; i++){
        let currentLetter = string[i].charCodeAt() + offset;
        if(currentLetter > 'z'.charCodeAt()){
            currentLetter = currentLetter - 'z'.charCodeAt() + 'a'.charCodeAt() - 1;
        }
        ans+= String.fromCharCode(currentLetter);
    }
    return ans;
}

console.log( alphabetShift(2,'zab' ))  //==>bcd

// problem 21 

function moreThanOnce(string){
    // Description: method that takes in a string and returns number of letters that appear more than once in the String

    // walk the string, and use a dict to store the counts of each String
    // everytime it gets repeated, add to the count 
    // walk through the dict
    // if the letter is greater than one iterate a counter
    string = string.toLowerCase();
    let dict = {};
    for(let i = 0; i<string.length; i++){
        if(dict[string[i]]){
            dict[string[i]]++
        }else{
            dict[string[i]]=1;
        }
    }
    let count = 0;
    for(let letter in dict){
        if(dict[letter]>1){
            count++
        }
    }
    return count;
}

console.log(moreThanOnce("giveMeSixFigures"));  //  ==> 4
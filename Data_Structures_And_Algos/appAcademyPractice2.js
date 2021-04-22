/*

A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin


 */


function goatLatin(string){
	// Description: a module that takes the word a converts it to pig latin
	// input: S [type:string]
	// return: ans [type:string]
	
	let vowels = ["a","e","i","o","u","A","E","I","O","U"]

	// if the word begins with a vowel, we append the word with "ma"
	// if the word begins with a consonant, we remove the first consonant and append it to the 
	// end with ma;

	let ans = '';
	if(vowels.includes(string[0])){
		// add ma to the end of the word
		ans = string+"ma";
	}else{
		for(let i = 1;i < string.length;i++){
			ans += string[i];
		}
		ans += string[0] + "ma"
	}

	return ans;

}


console.log(goatLatin("ninja"));
console.log(goatLatin("angel"));
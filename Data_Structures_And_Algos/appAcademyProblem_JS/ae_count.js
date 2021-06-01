/** Ae Count
 * Write a method ae_count that takes in a string and returns a hash 
 * containing the number of a's and e's in the string. Assume the string contains only lowerase characters.
 */

function ae_count(string){
    let ae_counts = {a: 0, e:0}
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'a'){
            ae_counts['a']+= 1
        }else if(string[i] == 'e'){
            ae_counts['e'] += 1
        }
    }
    return ae_counts;
}


console.log(ae_count("everyone can program")) // #=> {"a"=>2, "e"=>3}
console.log(ae_count("keyboard"))// #=> {"a"=>1, "e"=>1}
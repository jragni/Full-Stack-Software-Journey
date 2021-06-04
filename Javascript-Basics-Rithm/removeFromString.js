/** Remove from String
 * Write a method called removeFromString, which accepts a string. a starting index, and a number of characters to remove
 */

function removeFromString(string, start, n){
    
    let newString = ''
    for(let i = 0; i<string.length;i++){
        if(i>= start && n > 0){
            n--;
            continue;
        }else{
            newString += string[i];
        }
    }
    return newString;
}



console.log(removeFromString('Elie', 2, 2)); // 'El'
console.log(removeFromString('Elie', 0, 1)) // 'lie'
console.log(removeFromString('Rithm School', 0, 6)) // 'School'
console.log(removeFromString('Rithm School', 2, 4)) // 'RiSchool'
console.log(removeFromString('Rithm School', 6, 400)) // 'Rithm '
/** Format Name
 * Write a method format_name that takes in a 
 * name string and returns the name properly capitalized.
 */

function format_name(string){  
    let names = string.split(' ')
    let formattedName = []
    for(let name of names){
        formattedName.push((formatName(name)))
    }
    return formattedName.join(' ')
}

function formatName(name){
    char = name.split('')
    let newName = ''
    char.forEach((ele, idx) => {
        if(idx == 0){
            newName += ele.toUpperCase();
        }else{
            newName += ele.toLowerCase();
        }
    });
    return newName
}


console.log(format_name("chase WILSON"))// # => "Chase Wilson"
console.log(format_name("brian CrAwFoRd scoTT")) //# => "Brian Crawford Scott"
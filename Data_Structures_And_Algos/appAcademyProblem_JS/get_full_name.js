/** Get Full Name
 * 
 * Write a method get_full_name that takes in a hash containing a first, last, and title. 
 * The method should return a string representing the hash's full name
 */
function get_full_name(hash){

    let fullName = ''

    for(let name in hash){
        if(name == "title"){
            fullName += ', the ' + hash[name]
        }else{
            fullName += hash[name] + " "
        
        }
    }
    return fullName
}


 let hash1 = {"first":"Michael", "last":"Jordan", "title":"GOAT"}
 console.log(get_full_name(hash1))// # => "Michael Jordan, the GOAT"
 
 let hash2 = {"first":"Fido", "last":"McDog", "title": "Loyal"}
 console.log(get_full_name(hash2)) //  # => "Fido McDog, the Loyal"
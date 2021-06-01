/** Select Upcase Keys
 * Write a method select_upcase_keys that takes in a hash and returns
 * a new hash containing key value pairs of the original hash that had uppercase keys. you can assume that
 * the keys will always be strings
 */

function select_upcase_keys(hash){
    let newHash = {}

    for(let keys in hash){
        if(keys == keys.toUpperCase()){
            newHash[keys] = hash[keys];
        }
    }

    return newHash

}

console.log(select_upcase_keys({"make" :"Tesla", "MODEL" : "S", "Year" : 2018, "SEATS" : 4}))  //# => {"MODEL"=>"S", "SEATS"=>4}


console.log(select_upcase_keys({"DATE" : "July 4th","holiday" : "Independence Day", "type" : "Federal"}))  // # => {"DATE"=>"July 4th"}

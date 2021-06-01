/** Map By Name
 * Write a method that takes in an array of hashes and returns a new array containing the names of each hash.
 */

function map_by_name(array){
    return array.map((ele) => {
        for(let key in ele){
            return ele["name"];
        }
    })
}

let pets = [
    {"type":"dog", "name":"Rolo"},
    {"type":"cat", "name": "Sunny"},
    {"type":"rat", "name":"Saki"},
    {"type":"dog", "name":"Finn"},
    {"type":"cat", "name":"Buffy"}
  ]
  console.log(map_by_name(pets))// #: ["Rolo", "Sunny", "Saki", "Finn", "Buffy"]
  
  
  let countries = [
   {"name":"Japan", "continent":"Asia"},
   {"name":"Hungary", "continent":"Europe"},
   {"name":"Kenya", "continent":"Africa"},
  ]
  console.log(map_by_name(countries)) // #: ["Japan", "Hungary", "Kenya"]
  
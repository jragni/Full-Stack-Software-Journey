/** Map by key 
 * Write a method that takes in an array of hashes and a key string. The 
 * method should return a new array containing values from each hash given the key
 */

function map_by_key(array, key){
    return array.map((ele)=>{
        for(let objKey in ele){
            return ele[key];
        }
    })
}

 let locations = [
    {"city":"New York City", "state":"New York", "coast":"East"},
    {"city":"San Francisco", "state":"California", "coast":"West"},
    {"city":"Portland", "state":"Oregon", "coast":"West"},
  ]
  
  console.log( map_by_key(locations, "state"))// #: ["New York", "California", "Oregon"]
  
  console.log( map_by_key(locations, "city") )//#: ["New York City", "San Francisco", "Portland"]
  
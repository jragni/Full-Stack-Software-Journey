/** Hash to Pairs
 * 
 * Write a function hash_to_pairs that takes in a hash and returns a two-d array representing each 
 * key-value pair.
 */

function hash_to_pairs(hash){
    let ans = []
    for(let key in hash){
        ans.push([key, hash[key]]);
    }
    return ans;
}

console.log(hash_to_pairs({"name":"skateboard", "wheels":4, "weight":"7.5 lbs"}))
// => [["name", "skateboard"], ["wheels", 4], ["weight", "7.5 lbs"]]



console.log(hash_to_pairs({"kingdom":"animalia", "genus":"canis", "breed":"German Shepherd"})) ;
// => [["kingdom", "animalia"], ["genus", "canis"], ["breed", "German Shepherd"]]

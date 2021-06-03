/** Multiple Letter Count
*  Write a funciton that takes in one parameter and returns an object being thelettrs and the counts of vlaues
*/

function multipleLetterCount(string) {
    let chars = string.split('')
    let counts = {}
    chars.forEach(ele => {
        counts[ele] ? counts[ele] += 1 : counts[ele] = 1
    });
    return counts;
}

console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}
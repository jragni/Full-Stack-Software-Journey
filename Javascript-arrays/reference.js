/**
 * Excercise to show the difference between passing
 * by value and passing by reference
 * 
 * Will practice shift, unshift, push, concat and pass by value and reference
 */

let arr = []
arr.push("jhensen", "agni");
arr.unshift("blue")

arr.shift()
console.log(arr)

let arr2 = [16, "JavaScript"];

console.log(arr2.indexOf(42))

let combinedArr = arr.concat(arr2)
console.log(combinedArr)


arr = ["JavaScript", "Python", "Ruby", "Java"]

let arg = arr.slice(1,3);
console.log(arg)

arg.concat(["Haskell", "Clojure"])
console.log(arg)

let arr3 = arr.join(", ")
console.log(arr3)

let string = "John Snow goes home"

console.log(string.split(" ").filter((ele)=>ele).join(""))

for(let word of string){
    console.log(word)
}
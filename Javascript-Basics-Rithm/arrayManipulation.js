/** array Manipulation
 * Write a function that takes in four params array, command, location, value)
 */

function arrayManipulation(array, command, location,value){
   // commands -> remove & add
   // location -> beginning & end
   // value is the item being added
   
   if(command == "remove" && location == "beginning"){
       return array.shift();
   }else if(command == "remove" && location =="end"){
       return array.pop();
   }else if(command =="add" && location == "beginning"){
       array.unshift(value);
       return array
   }else if(command == "add" && location == "end"){
      array.push(value);
      return array 
   }

    
}

console.log(arrayManipulation([1,2,3], "remove", "end")); // 3
console.log(arrayManipulation([1,2,3], "remove", "beginning")) // 1
console.log(arrayManipulation([1,2,3], "add", "beginning", 20)); // [20,1,2,3]
console.log(arrayManipulation([1,2,3], "add", "end", 30)); // [1,2,3,30]

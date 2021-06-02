/*

    1. Using a loop, iterate through this array and console.log all of the people.
    2. Write the command to remove "Greg" from the array.
    3. Write the command to remove "James" from the array.
    4. Write the command to add "Matt" to the front of the array.
    5. Write the command to add your name to the end of the array.
    6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
    7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
    8. Write the command that gives the indexOf where "Mary" is located.
    9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
    10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
    11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
*/

let people = ["Greg", "Mary", "Devon", "James"];
// 1.
people.forEach((person)=> {
    console.log(person)
});

// 2.
people.shift();
console.log(people);

// 3.
people.pop();
console.log(people);
// 4.
people.unshift("Matt");
// 5.
people.push("Jhensen");
console.log(people)
console.log('--------')
// 6.
for(let person of people){
    console.log(person);
    if(person == "Mary"){
        break
    }
}
// 7.
console.log(people.slice(2,people.length));
// 8. Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf('Mary'));
// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf('Foo'));
// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
people.splice(2,1,'Elizabeth','Artie');
console.log(people);
// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
var withBob = people.concat('Bob')
console.log(withBob);
/** Write a function called createStudent, which accepts two parameters both of which are strings. 
 * The function should return an object with the keys firstName and lastName and the values 
 * should be each of the names */

function createStudent(first, last) {
    return {
        firstName: first,
        lastNameL: last
    };
}
console.log(createStudent("Elie", "Schoppik"));
/*
{
    firstName: "Elie",
    lastName: "Schoppik"
}
*/
console.log(createStudent("Tim", "Garcia"));
/*
{
    firstName: "Tim",
    lastName: "Garcia"
}
*/
/* Using your createStudent function, create three students and save them each in a variable. 
* Then create a variable called students, which is an array that will store your three students */

let tim = createStudent("Tim", "Garcia");
let elie = createStudent("Elie", "Shopick");
let matt = createStudent("Matt", "Lane");
let students = [matt, tim, elie];
/**  Write a function called findStudentByFirstName, which accepts one parameter, a string. 
* This function should iterate through the students array you just made and if the parameter 
* passed to the function is the same as one of the first name's of the students, the function should return true.
*  Otherwise it should return false.
* This function should be case insensitive so that you can search successfully regardless of capitalization.
*/

function findStudentByFirstName(firstName) {
    for (let student of students) {
        if (student.firstName.toLowerCase() == firstName.toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(findStudentByFirstName('elie') )// true

console.log(findStudentByFirstName('Elie')) // true
console.log(findStudentByFirstName('Janey')) // false
console.log(findStudentByFirstName('Janey')) // false
console.log(findStudentByFirstName('TIM')) // true
console.log(findStudentByFirstName('MMMaaaTTTtttTTT')) // false

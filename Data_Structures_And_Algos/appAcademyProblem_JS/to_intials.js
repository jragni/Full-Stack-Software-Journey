/**To Initials
 * Write a method to_initials that takes in a
 * person's name string and returns a string representing their initials.
 */

function to_initials(name){

    // split the name into an array of names
    // for each name, I want to take the first letters of the name and add it to the initials string

    let names = name.split(' ');
    let initials = ''
    names.forEach( (ele, idx) => {
        initials += ele[0].toUpperCase();
    });
    return initials;
}

console.log(to_initials("Kelvin Bridges")    ) //   # => "KB"
console.log(to_initials("Michaela Yamamoto") ) //   # => "MY"
console.log(to_initials("Mary La Grange")    ) //   # => "MLG"
/** Get Double Age
 * Write a method get_double_age that takes in a hash and returns twice the "age" value of the hash.
 */

function get_double_age(obj){
    return obj.age*2;
}

console.log(get_double_age({"name":"App Academy", "age":5})) // # => 10
console.log(get_double_age({"name":"Ruby", "age":23})      ) // # => 46
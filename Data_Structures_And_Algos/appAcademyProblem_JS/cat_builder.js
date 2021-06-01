/** Cat Builder
 * Write a method cat_builder that takes in a name, color, and age. 
 * The method should return a hash representing a cat with those values.
 */

function cat_builder(name, color, age){
    let cat = {}
    cat.name = name
    cat.color = color
    cat.age = age
    return cat;
}

console.log(cat_builder("Whiskers", "orange", 3)) //#=> {"name"=>"Whiskers", "color"=>"orange", "age"=>3}


console.log(cat_builder("Salem", "black", 100) )// #=> {"name"=>"Salem", "color"=>"black", "age"=>100}
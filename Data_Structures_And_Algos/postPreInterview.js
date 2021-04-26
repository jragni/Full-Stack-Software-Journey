// Write a function that inputs an array and product,
// and returns a boolean value

function isProduct(numbers, product){
    // walk the array, and check if the distinct elements
    // in the array equal the product 

    // use a dictionary to have the key as the potential answer and the value to have the element

    let dict = {};  // key: potentialAns value: element 

    for(let element of numbers){
        let potentialAns = product/element; 
        if(element in dict){
            return true
        }else{
            dict[potentialAns] = element;
        }
    }
    return false;
}

console.log(isProduct([1,2,3,4,5,6],15))

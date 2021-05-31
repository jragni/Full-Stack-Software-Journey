/** Two Dimensional Sum
 * Write a method two_d_Sum that takes in a two dimensional array and returns the sum of all elements in the array.
 */

function two_d_sum(arr){
    let sum = 0

    arr.forEach( (ele) => {
        ele.forEach( (n) =>{
            sum += n;
        });
    });
    
    return sum;
}


let array_1 = [
    [4, 5],
    [1, 3, 7, 1]
  ]
  console.log(two_d_sum(array_1)) //     # => 21
  
  let array_2 = [
    [3, 3],
    [2],
    [2, 5]
  ]
  console.log(two_d_sum(array_2) ) //   # => 15
/** Two Dimensional Translate
 * Write a method two_d_translate that takes in a 2 dimensional array and translates 
 * it into a 1 dimensional array. You can assume that the inner arrays always have
 *  2 elements. See the examples.
 */

function two_d_translate(arr){
    let ans = []
    arr.forEach((ele1)=>{
        let i = 0;
        while(i < ele1[1]){
            ans.push(ele1[0])
            i++;
        }        
    });
    return ans;
}





var arr_1 = [
    ['boot', 3],
    ['camp', 2],
    ['program', 0]
  ]
  
console.log(two_d_translate(arr_1)) // # => [ 'boot', 'boot', 'boot', 'camp', 'camp' ]

/** CreateCalculator
 * Write a function that should return an object that has four methods
 * 1. add
 * 2. subtract
 * 3. multiply
 * 4. divide
 * 
 * Practice returning objects with functions
 */

function createCalculator(){
    return {
        add: function(...n){
            let sum = 0;
            n.forEach(ele => {
                sum += ele
            });
            return sum
        },

        subtract: function(...n){
            let total = 0;
            n.forEach(ele => {
                total -= ele;
            });
            return total;
        },

        multiply: function(...n){
            let product = 1;
            n.forEach((ele)=>{
                product *= ele;
            });
            return product;
        },

        divide: function(...n){
            let div;
            n.forEach((ele, idx) => {
                idx > 1 ? div /= ele : div = ele;
            })
            return div;
        }

    }
}

let calc = createCalculator();
console.log(calc.add(20,20,30)); // 70
console.log(calc.subtract(2,2)); // 0
console.log(calc.multiply(2,2)); // 4
console.log(calc.divide(12,2)); // 6
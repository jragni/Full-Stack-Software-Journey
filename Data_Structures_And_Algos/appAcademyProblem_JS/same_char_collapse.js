/** Same Char Collapse
 * Write a method that takes in a string and returns a collapses version of the string. To collapse
 * the string, we repeatedly delete 2 adjacent characters. 
 * If there are multiple pairs that can be collapsed, deleted the leftmost pair.
 */

function same_char_collapse(string){

    // split the string
    // while the string is not collapsed
        // set flag for simplified
        // for each element in the string
            // check if the adjacent element is similar
                // if similar,
                    // remove the two
                    // set flag to not simplified
    // return string

    let chars = string.split('')
    let isCollapse = true
    while(isCollapse){
        isCollapse = false;
        chars.forEach( (ele, idx) => {
            if(ele == chars[idx+1]){
                chars[idx] = ""
                chars[idx + 1] = ""
                isCollapse = true
            }
        });
        chars = chars.filter(ele => ele);
    }
    return chars.join("");

}


console.log(same_char_collapse("zzzxaaxy")  ) //
//=> "zy"
// because zzzxaaxy -> zxaaxy -> zxxy -> zy


console.log(same_char_collapse("uqrssrqvtt")) //
//=> "uv"
// because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv
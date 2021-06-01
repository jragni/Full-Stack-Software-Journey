/** Hand Score
 * Write a method hand_score that takes in a string representing a hand of cards
 * and returns it's total score. You can assume that the letters in the string are only A, K, Q, J.
 * A is worth 4, K is worth 3, Q is worth 2, and J is worth 1. The letters of the input string are not 
 * necessarily uppercase
 */


function hand_score(hand){
    let cards = hand.toUpperCase().split('');

    let scoreboard = {'A': 4, 'K': 3, 'Q': 2, 'J' : 1}
    let score = 0
    cards.forEach((ele) => {
       score += scoreboard[ele] 
    });
    return score
}


console.log( hand_score("AQAJ")) // #=> 11
console.log( hand_score("jJka")) // #=> 9

////////


/* Write a function called validParentheses that takes a string of parentheses and determines if the order 
of the parentheses is valid. The function should return true if the string is valid and false if it is invalid.

P
  I
    string of parentheses
  O
    true or false boolean value
  R
    true if the parenthese are balanced, in that every opening character has a closing character
    -what if there is an empty string? 
      return true?
    Parenthese will be unbalanced
E
  see below
D
  numbers
    going to count left hand characters and right hand characters
A

If at any point right hand characters outnumber left hand characters, unbalanced
If at the end, left and right are not equal, unbalanced

Declare variables lefty and righty, set to zero
Iterate over each character in the string
  If left hand char, increment lefty
  else, increment lefty
  If righty is greater than lefty, return false
if righty does not equal lefty, return false
  else, return true


*/

function validParentheses(inputStr) {
  let lefty = 0;
  let righty = 0;

  for (let i = 0; i < inputStr.length; i += 1) {
    if (inputStr[i] === "(") {
      lefty += 1;
    } else righty += 1;
    if (righty > lefty) return false;
  }

  return righty === lefty;
}



/* Examples:
"()"                =>  true
 ")(()))"           =>  false

"("                 =>  false
"(())((()())())"    =>  true */

// Test Cases
console.log(validParentheses( "()" )) // true
console.log(validParentheses("(())((()())())")) // true
console.log(validParentheses("((())))(")) // false
console.log(validParentheses("((())))(()")) // false

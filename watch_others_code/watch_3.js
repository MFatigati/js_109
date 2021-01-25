/* 
P
  I
    non empty lowercase string
  O
    true of false
  R
    true
      if there are any substrings that repeat to make up the string
E
see below

D
should be able to do all the work with strings

A
Create substr variable equal to empty string

Until the substring is greater than half the length of the input string
  Iterate over elements in input string
    Add current element to substring
    create a variable containing an empty string to contain test substring
    Until the length of the test substring is less than length of input string by one
      Concat test substring to the substring
    If test substring is equal to input substring
      return true

return false
*/

function repeatedSubStringPattern(str) {
  let subStr = "";
  let maxSubLength = Math.floor(str.length / 2);
  // console.log(maxSubLength);
  
    for (let i = 0; i < maxSubLength; i += 1) {
      subStr += str[i];
      // console.log(subStr);
      let repeater = "";
      while (repeater.length < str.length - 1) {
        repeater += subStr;
      }
      // console.log(repeater);
      if (repeater === str) {
        return true;
      }
    }

  return false;
}

console.log(repeatedSubStringPattern("abab")) // true
console.log(repeatedSubStringPattern("aba")) // false
console.log(repeatedSubStringPattern("aabaaba")) // false
console.log(repeatedSubStringPattern("abaababaab")) // true
console.log(repeatedSubStringPattern("abcabcabcabc")) // true
console.log(repeatedSubStringPattern("abcabcabc")) // true
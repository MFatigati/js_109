/* 
Problem Description
 Write a function to find the longest common prefix string amongst an array of strings.

 If there is no common prefix, return an empty string "".

 Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:
All given inputs are in lowercase letters a-z.

P
  I
    Array of strings
  O
    string: longest common prefix among the strings in the array
  R
    If no common prefix, return ""
    all inputs lower case
E
D
  keep strings in array
  gradually build string output
A
  Declare a prefix variable set to empty string;
  Iterate over every character of the first element in the array
    Iterate over the remaining elements in the array (start at current index + 1)
      If every a character at the same index in the other elements does not equal the current character
        return prefix variable value  
    assuming all characters match, add that character to prefix variable value
  Return prefix variable value;

*/

function commonPrefix(inputArr) {
  let prefix = "";

  for (let currentCharPosition = 0; currentCharPosition < inputArr[0].length; currentCharPosition += 1) {
    // console.log(inputArr[0][currentCharPosition]);
    for (let comparisonWord = 1; comparisonWord < inputArr.length; comparisonWord += 1) {
      //console.log(inputArr[comparisonWord][currentCharPosition]);
      if (inputArr[0][currentCharPosition] !== inputArr[comparisonWord][currentCharPosition]) {
        // console.log(prefix);
        return prefix;
      }
    }
    prefix += inputArr[0][currentCharPosition];
  }
  // console.log(prefix);
  return prefix;
}



// Test Cases
 console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
 console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
 console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
 console.log(commonPrefix(["throne","dungeon"]) === ""); // true
 console.log(commonPrefix(["throne","throne"]) === "throne"); // true

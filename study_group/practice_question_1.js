/* You are given an array of strings and an integer k. Your task is to return the first 
longest string consisting of k consecutive strings taken in the array.

P
  -I
    -array of stings, integer
  -O
    -out of all the possible combinations of k consecutive strings, return the longest one
  -R
    if the length of the array is 0,
      or the requested k number of consecutive strings is less than the array length
        or the requested k number of consecutive strings is less than zero
          return ""
E
D
need to somehow get all the possible k consecutive strings into a single array to figure out which one is longest
A
Create an empty array
Iterate over all the strings in the input array
  For as many counts as it takes to reach k
    If there is an element after the current element
      Concat current string with remaining number of necessary strings
      Add new string to empty array
Sort the new array by length, in ascending order
Return final value

*/

function longestConsec(inputArr, k) {
  if (inputArr.length === 0 || k <= 0 || inputArr.length < k) {
    return "";
  }

  let newArr = [];
  inputArr.forEach((currentString, currentIdx) => {
    let str = currentString;
    // console.log(currentString);
    for (let count = 1; count < k; count++) {
      if (inputArr[currentIdx + count]) {
      str = str + inputArr[currentIdx + count];
      }
    }
    newArr.push(str);
  })
  // console.log(newArr);
  newArr.sort((a, b) => {
    return a.length - b.length;
    /* 
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    if (a.length === b.length) {
      return 0
    }; */
  })
  // console.log(newArr);
  return newArr[newArr.length - 1];
}


Example: 

//longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)
// "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) === "abigailtheta"); // true
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh"); // true
console.log(longestConsec([], 3) === ""); // true
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"); // true
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu"); // true
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz"); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""); // true
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""); // true

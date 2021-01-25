/* 
P
  I
    array of strings
  O
    array of the common characters, in order, that appear in all the strings
  R
    the same character can be common more than once
    if no common characters, return empty array
    apparently, no empty strings
    always at least two strings
E
  see below
D
  split strings into arrays so that you can delete characters
A
Create empty array-to-be-returned
Iterate over all the chars in the first element (current element)
  Create count set equal to 1
  Iterate over all the remaining elements
    If current element exists in remaining element
      increment count
      remove character from string (extract to function)
  If count is the same as length of input array
    Add current element to array-to-be-returned
Return array-be-be-returned

*/

function commonChars(inputArr) {
  let returnArr = [];
  for (let i = 0; i < inputArr[0].length; i += 1) {
    let currentChar = inputArr[0][i];
    // console.log(currentChar);
    let count = 1;
    for (let j = 1; j < inputArr.length; j += 1) {
      let nextWord = inputArr[j];
      let nextWordArr = nextWord.split("");
      if (nextWordArr.includes(currentChar)) {
        count += 1;
        inputArr[j] = removeChar(inputArr[j], currentChar);
      }
    }
    if (count === inputArr.length) {
      returnArr.push(currentChar);
    }
  }
  return returnArr;
}

function removeChar(str, char) {
  let arr = str.split("");
  arr.splice(arr.indexOf(char), 1);
  return arr.join("");
}


console.log(commonChars(["a", "b"])); // []
console.log(commonChars(["ab", "bc"])); // ["b"]
console.log(commonChars(["bella", "label", "roller"])); // ["e", "l", "l"]
console.log(commonChars(["cool", "lock", "cook"])); // ["c", "o"]
console.log(commonChars(["hello", "goodbye", "booya", "random"])); // [ 'o' ]
console.log(commonChars(["aabbaaaa", "ccddddd", "eeffee", "ggrrrr", "yyyzzz"])); // []
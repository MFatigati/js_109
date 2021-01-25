/* 
P
  I
    two strings
  O
    true or false
  R
    true if a portion of str1 characters can be rearranged to form str2
    Empty string?
E
scramble('javaass', 'jjss') // false
scramble('rkqodlw', 'world') // true
scramble('cedewaraaossoqqyt', 'codewars') // true
scramble('katas', 'steak') // false
scramble('scriptjava', 'javascript') // true
scramble('scriptingjava', 'javascript') // true
D
  will be easier to compare data if the strings are arrays
A

Convert both strings into arrays of individual characters
Iterate through each character of the second array
  If the first array does not include that character
    Return false
  Otherwise
    Get the index of that character in the first array
    Remove that character from the first array.
Return true

*/

function scramble(str1, str2) {
  let wordArr = str2.split("");
  let arrtoCheck = str1.split("");
  // console.log(wordArr, arrtoCheck);

  for (let i = 0; i < wordArr.length; i += 1) {
    charToCheck = wordArr[i];
    if (!arrtoCheck.includes(charToCheck)) {
      // console.log(arrtoCheck);
      return false;
    } else {
      let indexToDelete = arrtoCheck.indexOf(charToCheck);
      arrtoCheck.splice(indexToDelete, 1);
    }
  }
  return true;
}


console.log(scramble('javaass', 'jjss')) // false
console.log(scramble('rkqodlw', 'world')) // true
console.log(scramble('cedewaraaossoqqyt', 'codewars')) // true
console.log(scramble('katas', 'steak')) // false
console.log(scramble('scriptjava', 'javascript')) // true
console.log(scramble('scriptingjava', 'javascript')) // true
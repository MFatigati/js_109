/* 
P
  I
    2 strings
  O
    true or false
  R
    is there a sequence of 2 or more letters that appears in both strings
    case insensitive
E
D
  keep it in strings
A
Iterate over each character in the first string
  For each character, iterate over a progressively larger substring starting at that character, until the end
    For each substring, iterate over each character in the second string
      For each character in the second string, iterate over a progressively larger substring starting at that character, until the end
        If there is ever a match between the two substrings, return true
Return false

// alterate algorith
Create arrays of all the substrings in each
  Create a function that gives you all leading substrings
  Create a function that gives you all slices of a word
    Feed slices of the word into the leading substring function

*/

// function works, but so many nested for loops not ideal
/* function substringTest(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
  for (let charPosition1 = 0; charPosition1 < str1.length; charPosition1 += 1) {
    let subStr1 = str1[charPosition1];
    for (let nextLetter = charPosition1 + 1; nextLetter < str1.length; nextLetter += 1) {
      subStr1 += str1[nextLetter];
      // console.log(subStr1);
      for (let charPosition2 = 0; charPosition2 < str2.length; charPosition2 += 1) {
        let subStr2 = str2[charPosition2];
        for (let nextLetter2 = charPosition2 + 1; nextLetter2 < str2.length; nextLetter2 += 1) {
          subStr2 += str2[nextLetter2]
          // console.log(subStr2);
          if (subStr1 === subStr2) {
            return true;
          }
        }
      }
    }
  }
  return false;
} */

function leadingSubStrings(str) {
  let result = [];
  let substr = str[0];
  for (let i = 1; i < str.length; i += 1) {
    substr = substr += str[i];
    result.push(substr);
  }
  return result;
}

function allSlices(str) {
  let result = [];

  for (let i = 0; i < str.length - 1; i += 1) {
    let oneSlice = str.slice(i);
    result.push(oneSlice);
  }
  return result;
}

function allSubStrings(slicesArr) {
  let result = [];

  slicesArr.forEach(slice => {
    result.push(leadingSubStrings(slice.toLowerCase()));
  })

  return result.flat();
}

// console.log(allSubStrings(allSlices("pizza")));

function substringTest(str1, str2) {
  let str1Subs = allSubStrings(allSlices(str1));
  let str2Subs = allSubStrings(allSlices(str2));
  
  let match = false;
  str1Subs.forEach(sub1 => {
    str2Subs.forEach(sub2 => {
      if (sub1 === sub2) {
        match = true;
      }
    })
  })
  return match;
}


console.log(substringTest("Something", "Fun")); // false
console.log(substringTest("Something", "Home")); // true
console.log(substringTest("Something", "")); // false
console.log(substringTest("", "Something")); // false
console.log(substringTest("BANANA", "banana")); // true
console.log(substringTest("1234567", "541265")); // true
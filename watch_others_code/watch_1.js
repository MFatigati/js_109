/* 

P
  I
    positive integer
  O
    positive integer: next biggest number able to be formed by rearranging those same digits
  R
    if no next biggest number possible, return -1
E
  focus on the last digits, if possible
D
  should be able to keep everything in strings
A

Coerce number to string, and split string into an array.

If length less than 2, return -1
Set swapped variable to false

Starting from the last character, iterate backwards
  If the current character is greater than the prior character
  Swap the two characters
  set swapped to true
  break;

If swapped is still false, return -1

Join and return array, coerced to number
// 1234 => 1243
// 1432 => 2134

2 < 3? yes, swap => 1423
2 < 4? yes, swap => 1243
2 < 1? no, leave alone => 1243

1 < 2 ? yes
  would swapping result in a greater number?
    yes, swap => 2143
1 < 4? yes
  would swapping result in a greater number

No, leave alone => 2143
4 > 3? Yes, swap => 2134

513 => 531
3 < 1? yes, swap => 531
3 < 5? yes, swap => 351

3 < 5? yes, swap => 531
2 < 1? no, leave alone => 531

Starting from the last character, iterate backwards
  If the current character is less than the prior character, swap

Starting from first character, iterate forwards
  If the current character is less than the next character, swap
  Set firstHalf to a slice of array up until next char
  Set secondHalf to slice of array from next char to end
  sort second half
  concat first half and second half
  Join array and return, coerced to number

*/

/* function nextBiggerNum(inputNum) {
  let arr = String(inputNum).split("");
  let swapped = false;

  if (arr.length < 2) return -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] < arr[i - 1]) {
      let currentNum = arr[i];
      let priorNum = arr[i - 1];
      arr[i] = priorNum;
      arr[i - 1] = currentNum;
      swapped = true;
    }
  }
  console.log(arr)

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < arr[i + 1]) {
      let currentNum = arr[i];
      let nextNum = arr[i + 1];
      arr[i] = nextNum;
      arr[i + 1] = currentNum;

      let firstHalf = arr.slice(0, i + 1);
      let secondHalf = arr.slice(i + 1).sort();
      arr = firstHalf.concat(secondHalf);
      break;
    }
  }

  if (swapped === false) return -1;

  return Number(arr.join(""));

} */

/* function nextBiggerNum(inputNum) {
  let arr = String(inputNum).split("");
  let swapped = false;

  if (arr.length < 2) return -1;

  for (let i = arr.length - 1; i >= 0; i -= 1) {
    if (arr[i] > arr[i -1]) {
      let currentNum = arr[i];
      let priorNum = arr[i-1];
      arr[i] = priorNum;
      arr[i-1] = currentNum;
      swapped = true;
      break;
    }
  }
  
  if (swapped === false) return -1;

  return Number(arr.join(""));
} */




console.log(nextBiggerNum(9));
console.log(nextBiggerNum(12));
console.log(nextBiggerNum(513));
console.log(nextBiggerNum(2017));
console.log(nextBiggerNum(111));
console.log(nextBiggerNum(531));
console.log(nextBiggerNum(123456789));
console.log(nextBiggerNum(123456798));
console.log(nextBiggerNum(1432)); // 2134
console.log(nextBiggerNum(786)); // 867

/* 
Set currentNum to input number

Coerce number to string, and split string into an array, sorted.

While length of currentNum is equal to inputNum
  increment currentNum by 1
  Coerce number to string, and split string into an array, sorted.
  If the two arrays match, return currentNum

Return -1

*/

function nextBiggerNum(inputNum) {
  let currentNum = inputNum;

  let originalNumArr = String(inputNum).split("").sort();
  // console.log(originalNumArr);

  while (String(currentNum).length === String(inputNum).length) {
    currentNum += 1;
    let currentNumArr = String(currentNum).split("").sort();
    
    let matchCount = 0;

    for (let i = 0; i < originalNumArr.length; i += 1) {
        if (originalNumArr[i] === currentNumArr[i]) {
          matchCount += 1;
        }
      }

    if (matchCount === originalNumArr.length) {
      return currentNum;
    }

  }

  return -1;

}
// skipped common prefix because was part of study group

/* 
P
  I: array of numbers
  O: index or -1
  R:
    If there is an index at which the sum of values to the left === sum of values to the right, return that index
      Else return -1
    At position 0, there is an empty array to the left of that position, which equals 0
E
D
A
Itereate over each index in the array
  Get sum of digits to the left of that index (extract)
  Get sum of digits to the right of that index (extract)
  If the two sums are equal, return that index
Return -1

Sum digits to right of index
  Input: array, index
  Slice element from next index to end
  Reduce elements to a sum

Sum digits to left of index
  Input: array, index
  Slice element from 0 to current index
  Reduce elements to a sum
*/

function findEvenIndex(arr) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (sumLeft(arr, idx) === sumRight(arr, idx)) {
      return idx;
    }
  }
  return -1;
}

function sumRight(arr, idx) {
  let toBeSummed = arr.slice(idx + 1);
  let sum = toBeSummed.reduce((acc, num) => acc += num, 0);
  return sum;
}

function sumLeft(arr, idx) {
  let toBeSummed = arr.slice(0, idx);
  let sum = toBeSummed.reduce((acc, num) => acc += num, 0);
  return sum;
}

// console.log(sumLeft([1, 2, 3, 4, 3, 2, 1], 0));
// console.log(sumLeft([1, 2, 3, 4, 3, 2, 1], 2));
// console.log(sumRight([1, 2, 3, 4, 3, 2, 1], 3));


console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); // 3
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1,])); // 3
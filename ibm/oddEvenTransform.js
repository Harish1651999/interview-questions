// Question 10: Odd-Even-Transform Problem works on an array of integers (both positive,
// negative, and zero), by taking in a value (a whole number) that specifies the number
// of times the transformation has to be applied.

function oddEvenTransform(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2 == 0) {
        arr[j] -= 3;
      } else {
        arr[j] += 3;
      }
    }
  }

  return arr;
}

let n = 3;
let arr = [3, 4, 9];
console.log(oddEvenTransform(arr, n));

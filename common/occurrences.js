const arr = [1, 2, 3, 1, 4, 5, 3, 1, 1];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 1) {
    count++;
  }
}

console.log("The number of occurrences of 1 in the array:", count);

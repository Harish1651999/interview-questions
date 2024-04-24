const arr = [1, 2, 3, 1, 4, 5, 3, 1, 1];
const uniqueArr = Array.from(new Set(arr));

//let uniqueArr = [...new Set(arr)];

// With for loop
// for (let i = 0; i < arr.length; i++) {
//     if (uniqueArr.indexOf(arr[i]) === -1) {
//         uniqueArr.push(arr[i]);
//     }
// }

console.log("Array with duplicates removed:", uniqueArr);

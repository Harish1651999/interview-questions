// Question 1: For each element of an array, a counter is set to 0 The element is compared
// to each it’s left. if the element to the left is greater. The absolute difference is substrates
// from the counter. The element of its left is less the absolute difference added to the counter

// Test Cases
// Sample Test 1
// Input;
// arr = [2,4,3];
// Output;
// [0,2,0]

// Sample Test 2
// Input;
// arr = [2,1,3];
// Output;
// [0,-1,3]

function arrayChallenge(arr) {
  let ans = [];

  ans.push(0);

  for (let i = 1; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < i; j++) {
      let ele = arr[i] - arr[j];
      sum += ele;
    }
    ans.push(sum);
  }
  return ans;
}

let arr = [2, 4, 3];
let result = arrayChallenge(arr);
console.log(result.join(" "));

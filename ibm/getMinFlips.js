// Test Cases
// Sample Test 1
// Input;
// pwd = "100110";
// Output;
// 3

// Sample Test 2
// Input;
// pwd = "101011";
// Output;
// 2

function getMinFlips(pwd) {
  let flipCount = 0;

  for (let i = 0; i < pwd.length - 1; i += 2) {
    if (pwd[i] != pwd[i + 1]) {
      flipCount++;
    }
  }

  return flipCount;
}

// Test Cases
// Sample Test 1
let pwd1 = "100110";
console.log(getMinFlips(pwd1)); // Output: 3

// Sample Test 2
let pwd2 = "101011";
console.log(getMinFlips(pwd2)); // Output: 2

// Sample Test 3
let pwd3 = "1110011000";
console.log(getMinFlips(pwd3)); // Output: 3

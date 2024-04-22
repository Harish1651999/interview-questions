// Question 4: Given a number n, for each integer / in the range from 1 to n inclusive,
// print one value per line as follows:
// • If is a multiple of both 3 and 5, print FizzBuzz.
// • If is a multiple of 3 (but not 5), print Fizz.
// • If is a multiple of 5 (but not 3), print Buzz.
// • If /is not a multiple of 3 or 5, print the value of i.

// Test Cases
// Sample Test 1
// Input
// n = 15
// Output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

let n = 15;
fizzBuzz(n);

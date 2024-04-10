// Question 3: The cost of a stock on each day is given in an array, art. An investor
// wants to buy the stocks in triplets such that the sum of the cost for three days is
// divisible by d.

// Test Cases
// Sample Test 1
// Input
// price = [3, 3, 4, 7, 8]
// d = 5
// Output
// 3

function findTheTriplets(price, n, d) {
  let ans = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = price[i] + price[j] + price[k];

        if (sum % d === 0) {
          ans++;
        }
      }
    }
  }

  return ans;
}

let n = 5;
let d = 5;
let price = [3, 3, 4, 7, 8]; // Corrected array initialization
let result = findTheTriplets(price, n, d);
console.log(result);

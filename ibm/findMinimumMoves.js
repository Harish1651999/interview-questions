// Test Cases
// Sample Test 1
// Input
// word = "baabacaa"
// Output 3

function findMinimumMoves(word) {
  let moves = 0;
  const cmp = new Map();

  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    cmp.set(char, (cmp.get(char) || 0) + 1);
  }

  for (const [char, count] of cmp.entries()) {
    if (count > 1) {
      moves += Math.floor(count / 2);
    }
  }

  return moves;
}

let word = "baabacaa";
console.log(findMinimumMoves(word));

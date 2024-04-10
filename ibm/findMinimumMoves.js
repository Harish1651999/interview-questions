// Question 2: An English lecture at Hacker Elementary School is aimed a teaching students the letters of the alphabet.

// The students are provided with a string word that consists of lowercase English letters. In one
// move, they can choose any index i, and let the character at that index be c. Then, the first occurrence
// of to the left of i, and the first occurrence of c to the right of i are deleted (Note: the operation can still
// be carried out even if either the left or right occurrence doesn’t exist). For example, If word = “adabacaea”, and if
// index 4 is chosen (0-based), the first occurrence of ‘a’ to the left and right of index 4 (bold, indices 2 and 6)
// are deleted leaving word - "adbacea"

// Find the minimum number of moves to get a word of minimal length

// Test Cases
// Sample Test 1
// Input
// word = "baabacaa"
// Output 3

// function findMinimumMoves(word) {
//   let moves = 0;
//   const cmp = new Map();

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     cmp.set(char, (cmp.get(char) || 0) + 1);
//   }

//   for (const [char, count] of cmp.entries()) {
//     if (count > 1) {
//       moves += Math.floor(count / 2);
//     }
//   }

//   return moves;
// }

function findMinimumMoves(word) {
  const cmp = new Map();

  for (const char of word) {
    cmp.set(char, (cmp.get(char) || 0) + 1);
  }

  return [...cmp.values()].reduce(
    (moves, count) => moves + Math.floor(count / 2),
    0
  );
}

let word = "baabacaa";
console.log(findMinimumMoves(word));

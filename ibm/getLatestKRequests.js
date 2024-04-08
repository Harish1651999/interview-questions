function getLatestKRequests(requests, k) {
  let ans = [];
  let check = new Map();
  let cnt = 0;

  for (let i = requests.length - 1; i >= 0; i--) {
    if (cnt == k) {
      return ans;
    }
    if (check[requests[i]] != true) {
      cnt++;
      check[requests[i]] = true;
      ans.push(requests[i]);
    }
  }

  return ans;
}

let requests = ["item1", "item2", "item3", "item1", "item3"];
let k = 3;
console.log(getLatestKRequests(requests, k));

// output
// ["item3", "item1", "item2"]

// Question 3: There is a shop with old-style cash registers. Rather than scanning items
// and pulling the price from a database, the price of each item is typed in manually. This
// method sometimes leads to errors. Given a list of items and their correct prices, compare
// the prices to those entered when each item was sold.

function priceCheck(products, productPrices, productSold, soldPrice) {
  const priceMap = new Map();

  for (let i = 0; i < products.length; i++) {
    priceMap.set(products[i], productPrices[i]);
  }

  let errorCount = 0;
  for (let i = 0; i < productSold.length; i++) {
    if (priceMap.has(productSold[i])) {
      if (priceMap.get(productSold[i]) !== soldPrice[i]) {
        errorCount++;
      }
    }
  }

  return errorCount;
}

let products = ["eggs", "milk", "cheese"];
let productPrices = [2.89, 3.29, 5.79];
let productSold = ["eggs", "eggs", "cheese", "milk"];
let soldPrice = [2.89, 2.99, 5.97, 3.29];

console.log(priceCheck(products, productPrices, productSold, soldPrice));

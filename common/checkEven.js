function checkEven(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 == 0) {
      resolve(`${number} is even.`);
    } else {
      reject(`${number} is odd.`);
    }
  });
}

checkEven(7)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

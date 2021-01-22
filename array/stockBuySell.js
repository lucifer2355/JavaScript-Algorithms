const stockBuySell = (array) => {
  let maxPro = 0;
  let minPrice = Number.MAX_SAFE_INTEGER;

  for (const num of array) {
    minPrice = Math.min(minPrice, num);
    maxPro = Math.max(maxPro, num - minPrice);
  }

  return maxPro;
};

//! T => O(n)
//! S => O(1)

console.log(stockBuySell([7, 1, 5, 3, 6, 4]));

const minimumCoins = (coins, target) => {
  const result = [];
  let i = coins.length - 1;

  while (i >= 0) {
    if (target === coins[i]) {
      result.push(coins[i]);
      break;
    } else if (target > coins[i]) {
      target -= coins[i];
      result.push(coins[i]);
    } else i--;
  } //! O(n)

  return result;
};

//! T => O(n)
//! S => O(1)

console.log(minimumCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 49));

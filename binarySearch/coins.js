function findCoins(coins, amount) {
  let remainingAmout = amount;
  const transformedCoins = {};
  for (const coin of coins) {
    transformedCoins[coin] = 0;
  }
  const calculatedChange = {
    selectedCoins: transformedCoins,
    numberOfCoins: 0,
  };

  for (const coin of coins) {
    const count = Math.floor(remainingAmout / coin);
    transformedCoins[coin] = count;
    calculatedChange.numberOfCoins += count;
    remainingAmout = remainingAmout - coin * count;
  }

  return calculatedChange;
}

//! Time Complexity (Greedy Solution): O(n)

const availableCoins = [100, 50, 10, 10, 5, 2, 1];
const targetAmount = 129;

const change = findCoins(availableCoins, targetAmount);
console.log(change);

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

function findCoinsBruteForce(coins, amount) {
  const results = [];
  for (let i = 0; i < coins.length; i++) {
    results.push(findCoins(coins.slice(i), amount));
  }

  let smallestAmountOfCoins = Number.MAX_SAFE_INTEGER;
  let finalResult;
  for (const result of results) {
    if (result.numberOfCoins < smallestAmountOfCoins) {
      smallestAmountOfCoins = result.numberOfCoins;
      finalResult = result;
    }
  }

  return finalResult;
}

//! Time Complexity (Brute Force): O(n * n) + O(n) => O(n^2)

const availableCoins = [8, 6, 5, 1];
const targetAmount = 11;

const change = findCoinsBruteForce(availableCoins, targetAmount);
console.log(change);

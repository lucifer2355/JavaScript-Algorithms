const minimumCoins = (array) => {
  const result = [];
  let findAmount = 87;

  for (let i = 0; i < array.length; i++) {
    if (findAmount === 0) return result;
    else if (findAmount === array[i]) {
      result.push(array[i]);
      return result;
    } else if (findAmount < array[i]) {
      result.push(array[i - 1]);
      findAmount = findAmount - array[i - 1];
      i = 0;
    }
  }
};

console.log(minimumCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000]));

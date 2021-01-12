const sort012 = (array, n) => {
  let sortArray = [];
  const middle = Math.floor(n / 2);

  if (n === 3) return sortArray.push(array[0], array[n - 1], array[middle]);

  const loopLimit = n - sortArray.length;
  for (let i = 0; i < loopLimit; i++) {
    sortArray.push(array[middle] + 1);
  }
  console.log(sortArray);
};

console.log(sort012([0, 2, 1, 2, 0], 5));

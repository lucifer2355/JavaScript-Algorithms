const mergeIntervals = (array) => {
  let result = [];
  let currentInterval = array[0];
  array.sort((a, b) => a[0] - b[0]);

  for (const num of array) {
    if (currentInterval[0] < num[0] && currentInterval[1] > num[0]) {
      result.push([currentInterval[0], Math.max(num[1], currentInterval[1])]);
    } else {
      // console.log(num);
      currentInterval = num;
    }
  }
  result.push(currentInterval);

  return result;
};

console.log(
  mergeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
    [9, 9],
    [15, 18],
  ])
);

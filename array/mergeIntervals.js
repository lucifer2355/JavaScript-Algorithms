//! is array is sorted?

const mergeIntervals = (array) => {
  let result = [];
  array.sort((a, b) => a[0] - b[0]);
  let currentInterval = array[0];

  for (const num of array) {
    if (num[0] <= currentInterval[1]) {
      currentInterval[1] = Math.max(num[1], currentInterval[1]);
    } else {
      result.push(currentInterval);
      currentInterval = num;
    }
  }
  result.push(currentInterval);

  return result;
};

//! T => O(nlogn) + O(n)
//! S => O(n)

console.log(
  mergeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
    [9, 9],
    [15, 18],
  ])
);

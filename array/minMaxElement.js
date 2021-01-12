const minMaxElement = (array) => {
  let minMax = [];

  //! Array length is 1
  if (array.length === 1) return minMax[array[0]];

  //! Array length is 2
  if (array[0] > array[1]) {
    minMax.push(array[1], array[0]);
  } else {
    minMax.push(array[0], array[1]);
  }

  for (const num of array) {
    if (minMax[0] > num) minMax[0] = num;
    if (minMax[1] < num) minMax[1] = num;
  }
  return minMax;
};

console.log(minMaxElement([1, 2, 3, 4]));

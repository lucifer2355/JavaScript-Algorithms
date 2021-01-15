const kadanesAlgo = (array) => {
  let sum = 0;
  let max = array[0];

  for (const num of array) {
    sum += num;
    max = Math.max(sum, max);
    if (sum < 0) sum = 0;
  }

  return max;
};

console.log(kadanesAlgo([-2, -3, 4, -1, -2, 1, 5, -3]));

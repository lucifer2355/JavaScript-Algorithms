const repeateMissingNum = (array) => {
  let result = [0, 0];
  let nums = {};

  for (let i = 1; i <= array.length; i++) {
    nums[i] = 0;
  }

  for (const num of array) {
    nums[num]++;
    if (nums[num] === 2) result[0] = num;
  }

  for (let i = 1; i <= array.length; i++) {
    if (nums[i] === 0) result[1] = i;
  }

  return result;
};

console.log(repeateMissingNum([4, 3, 6, 2, 1, 1]));

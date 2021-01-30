const majorityElement = (array) => {
  const n = {};
  let majorElement = 0;
  let result;

  for (const num of array) {
    if (n[num]) {
      n[num]++;
      if (n[num] > majorElement) {
        majorElement = n[num];
        result = num;
      }
    } else n[num] = 1;
  }

  return result;
};

console.log(majorityElement([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]));

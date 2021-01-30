const majorityElement = (array) => {
  const n = {};
  let majorElement = 0;

  for (const num of array) {
    if (n[num]) {
      n[num]++;
      if (n[num] > majorElement) majorElement = num;
    } else n[num] = 1;
  }

  return majorElement;
};

console.log(majorityElement([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]));

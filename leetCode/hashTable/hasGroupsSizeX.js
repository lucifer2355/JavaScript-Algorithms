const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

const hasGroupsSizeX = (deck) => {
  const nums = {};

  for (const d of deck) {
    if (!nums[d]) nums[d] = 0;
    nums[d]++;
  }

  const vals = Object.values(nums);
  console.log(vals);

  return vals.reduce(gcd) > 1;
};

console.log(hasGroupsSizeX([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3]));

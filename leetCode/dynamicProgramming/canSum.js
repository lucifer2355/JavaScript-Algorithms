const canSumWithOutDP = (target, array) => {
  //! T => O(n ^ m) n = target sum, m = array length
  //! S => O(m)

  if (target === 0) return true;
  if (target < 0) return false;

  for (const num of array) {
    const remainder = target - num;
    if (canSumWithOutDP(remainder, array)) return true;
  }

  return false;
};

console.log(canSumWithOutDP(2, [5, 3, 4, 7]));

const canSumWithDP = (target, array, memo = {}) => {
  //! T => O(m * n)
  //! S => O(m)

  if (memo[target]) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;

  for (const num of array) {
    const remainder = target - num;
    if (canSumWithDP(remainder, array, memo)) {
      memo[target] = true;
      return true;
    }
  }

  memo[target] = false;
  return false;
};

console.log(canSumWithDP(7, [5, 3, 4, 7]));

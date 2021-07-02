const gridTravelerWithOutDP = (m, n) => {
  //! Time Complexity T => O(2 ^ n + m)
  //! Space Complexity S => O(n + m)

  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  return gridTravelerWithOutDP(m - 1, n) + gridTravelerWithOutDP(m, n - 1);
};

console.log(gridTravelerWithOutDP(2, 3));

const gridTravelerWithDP = (m, n, memo = {}) => {
  //! Time Complexity T => O(m * n)
  //! Space Complexity S => O(m + n)

  const key = `${m},${n}`;

  if (memo[key]) return memo[key];
  if (m === 0 || n === 0) return 0;
  if (m === 1 && n === 1) return 1;

  memo[key] =
    gridTravelerWithDP(m - 1, n, memo) + gridTravelerWithDP(m, n - 1, memo);

  return memo[key];
};

console.log(gridTravelerWithDP(2, 3));

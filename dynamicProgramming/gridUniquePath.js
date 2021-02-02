const gridUniquePath = (i, j, n, m, dp) => {
  if (i === n - 1 && j === m - 1) return 1;
  if (i >= n || j >= m) return 0;
  console.log(dp[i][j]);
  if (dp[i][j] !== -1) return dp[i][j];
  else
    return (
      (dp[i][j] = gridUniquePath(i + 1, j, n, m, dp)) +
      gridUniquePath(i, j + 1, n, m, dp)
    );
};

//! T => O(n X m)
//! S => O(n X m)

//  [
//     ["S", 1, 1],
//     [1, 1, "E"],
//   ]
//* n = 2 (row), m = 3 (column)

console.log(gridUniquePath(0, 0, 2, 3, Array(2).fill(Array(3).fill(-1))));

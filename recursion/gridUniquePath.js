const firstApproach = (i, j, n, m) => {
  if (i === n - 1 && j === m - 1) return 1;
  if (i > n || j > m) return 0;
  else return gridUniquePath(i + 1, j, n, m) + gridUniquePath(i, j + 1, n, m);
};

//  [
//     ["S", 1, 1],
//     [1, 1, "E"],
//   ]

//! T => exponential

console.log(firstApproach(0, 0, 2, 3));

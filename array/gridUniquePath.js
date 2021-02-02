const gridUniquePath = (n, m) => {
  const N = n + m - 2;
  let r = m - 1;
  let res = 1;

  for (let i = 1; i <= r; i++) res = (res * (N - r + i)) / i;

  return res;
};

//! T => O(n-1) || O(m-1)
//! S => O(1)

//  [
//     ["S", 1, 1],
//     [1, 1, "E"],
//   ]
//* n = 2 (row), m = 3 (column)

console.log(gridUniquePath(2, 3));

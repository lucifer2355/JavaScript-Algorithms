const rotateMatrix = (array) => {
  //! Transform matrix
  //! reverse all rows

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }

  for (let i = 0; i < array.length; i++) {
    array[i].reverse();
  }

  return array;
};

//! T => O(n^2) + O(n) = O(n^2)
//! S => O(1)

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

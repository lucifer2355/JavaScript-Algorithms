const rotateMatrix = (array) => {
  //! Transform matrix
  //! reverse all rows

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      [array[i][j], array[j][i]] = [array[j][i], array[i][j]];
    }
  }

  console.log(array);
};

console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

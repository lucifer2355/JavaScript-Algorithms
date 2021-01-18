//! Array value is positive or nagative

const setMatrixZero = (matrix) => {
  let colo0 = true;
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) colo0 = false;
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) matrix[i][0] = matrix[0][j] = 0;
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][i] === 0) matrix[i][j] = 0;
    }
    if (!colo0) matrix[i][0] = 0;
  }

  return matrix;
};

console.log(
  setMatrixZero([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 0],
    [0, 0, 0, 1],
  ])
);

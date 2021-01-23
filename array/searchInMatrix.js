const searchInMatrix = (array, target) => {
  let row = 0;
  let column = array.length - 1;

  while (row < array.length && column >= 0) {
    if (array[row][column] === target) return `row ${row}, column ${column}`;
    else {
      if (array[row][column] > target) column--;
      else row++;
    }
  }
};

console.log(
  searchInMatrix(
    [
      [10, 20, 30, 40],
      [11, 21, 36, 43],
      [25, 29, 39, 50],
      [50, 60, 70, 80],
    ],
    25
  )
);

const targetInMatrix = (array, target) => {
  let low = 0;
  let high = array.length * array[0].length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const firstIndex = Math.floor(mid / array[0].length);
    const secondIndex = Math.floor(mid % array[0].length);

    if (array[firstIndex][secondIndex] === target) return true;
    if (array[firstIndex][secondIndex] < target) low = mid + 1;
    else high = mid - 1;
  }

  return false;

  //! T => log2(n x m)
  //! S => O(1)
};

console.log(
  targetInMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50],
    ],
    30
  )
);

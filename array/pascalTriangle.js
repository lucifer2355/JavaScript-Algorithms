const pascalTriangle = (n) => {
  let result = [];

  for (let i = 0; i < n; i++) {
    let rowArray = new Array(i + 1);
    rowArray[0] = rowArray[i] = 1;

    for (let j = 1; j < i; j++) {
      rowArray[j] = result[i - 1][j - 1] + result[i - 1][j];
    }
    result.push(rowArray);
  }

  return result;
};

console.log(pascalTriangle(5));

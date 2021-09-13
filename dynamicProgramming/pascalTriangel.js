const pascalTriangle = (n) => {
  if (n === 1) return [[1]];
  if (n === 2) return [[1], [1, 1]];

  const result = new Array(n);
  result[0] = [1];
  result[1] = [1, 1];

  for (let i = 2; i < n; i++) {
    const remainArray = new Array(i + 1);
    remainArray[0] = remainArray[remainArray.length - 1] = 1;

    for (let j = 1; j < i; j++) {
      remainArray[j] = result[i - 1][j - 1] + result[i - 1][j];
    }

    result[i] = remainArray;
  }

  return result;
};

console.log(pascalTriangle(5));

const pascalTriangleWithDP = (n) => {};

console.log(pascalTriangleWithDP(5));

const countInversions = (array) => {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) result.push([array[i], array[j]]);
    }
  }

  return result.length;
};

console.log(countInversions([8, 4, 2, 1]));

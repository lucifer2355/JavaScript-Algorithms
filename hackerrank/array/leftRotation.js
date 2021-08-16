const leftRotation = (a, d) => {
  const array = a;
  const n = array.length - 1;

  for (let i = 0; i < d; i++) {
    for (let j = 0; j < n; j++) {
      [array[j], array[j + 1]] = [array[j + 1], array[j]];
    }
  }

  return array;
};

console.log(leftRotation([1, 2, 3, 4, 5], 4));

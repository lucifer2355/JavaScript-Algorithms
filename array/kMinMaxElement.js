const kMinElement = (array, k) => {
  array.sort((a, b) => a - b);
  return array[k - 1];
};

const kMaxElement = (array, k) => {
  array.sort((a, b) => b - a);
  return array[k - 1];
};

console.log(kMaxElement([2, 5, 6, 1, 3, 8, 4], 4));

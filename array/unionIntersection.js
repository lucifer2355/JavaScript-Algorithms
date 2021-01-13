const union = (array1, array2) => {
  let result = [];
  for (const num of array1) {
    result.push(num);
  }

  for (let i = 0; i < array2.length; i++) {
    if (!result.includes(array2[i])) {
      result.push(array2[i]);
    }
  }

  return result;
};

console.log(union([1, 2, 3, 4, 5], [4, 5, 6, 7]));

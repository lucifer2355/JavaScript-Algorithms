const twoSumBrutForce = (array, target) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === target) result.push(i);
    }
  }

  return result.length === 0 ? null : result;
};

//! T => O(n ^ 2)
//! S => O(n)

console.log(twoSumBrutForce([1, 3, 7, 9, 2], 11));

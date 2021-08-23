const combinationSum = (array, target) => {
  const result = [];
  findCombinationSum(0, [], array, target, result);

  return result;
};

function findCombinationSum(index, ds, array, target, result) {
  if (index === array.length) {
    if (target === 0) {
      result.push([...ds]);
    }
    return;
  }

  //! pick the element
  if (array[index] <= target) {
    ds.push(array[index]);

    findCombinationSum(index, ds, array, target - array[index], result);
    ds.pop();
  }

  //! do not pick the element
  findCombinationSum(index + 1, ds, array, target, result);
}

//! T => 2^n x k
//! S => s x k

console.log(combinationSum([2, 3, 6, 7], 7));

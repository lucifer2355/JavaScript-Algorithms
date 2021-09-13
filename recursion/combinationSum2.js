//! 1st brute force approach see combinationSum.js

const combinationSum = (array, target) => {
  const result = [];
  array.sort((a, b) => {
    if (a < b) return -1;
  });
  findCombinationSum(0, [], array, target, result);

  return result;
};

function findCombinationSum(index, ds, array, target, result) {
  if (target === 0) {
    result.push([...ds]);
    return;
  }

  for (let i = index; i < array.length; i++) {
    if (i > index && array[i] === array[i - 1]) continue;
    if (array[i] > target) break;
    ds.push(array[i]);
    findCombinationSum(i + 1, ds, array, target - array[i], result);
    ds.pop();
  }
}

console.log(combinationSum([1, 1, 1, 2, 2], 4));

//! 1st approach pick and non pick method (see subSetSums.js) then use set() for remove duplicate (O(2^n + log n))

const subsets = function(nums) {
  const result = [[]];
  buildSubsets(0, nums, [], result);
  return result;
};

function buildSubsets(index, nums, ds, result) {
  for (let i = index; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;
    const newSubset = [...ds, nums[i]];
    result.push(newSubset);
    buildSubsets(i + 1, nums, newSubset, result);
  }
}

//! T => O(2^n x n)
//! S => O(2^n) + O(k)

console.log(subsets([1, 2, 2, 2, 3, 3], 6));

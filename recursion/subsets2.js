//! 1st approach pick and non pick method (see subSetSums.js) then use set() for remove duplicate (O(2^n + log n))

function buildSubsets(nums, start, currSubset, output) {
  for (let i = start; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;
    const newSubset = [...currSubset, nums[i]];
    output.push(newSubset);
    buildSubsets(nums, i + 1, newSubset, output);
  }
}

const subsets = function(nums) {
  const output = [[]];
  buildSubsets(nums, 0, [], output);
  return output;
};

//! T => O(2^n x n)
//! S => O(2^n) + O(k)

console.log(subsets([1, 2, 2, 2, 3, 3], 6));

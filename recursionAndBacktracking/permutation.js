//* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

//! approach 1
const permutationsApproachOne = (nums) => {
  const result = [];
  const freq = Array.from({ length: nums.length }, () => 0);
  recurPermute([], nums, result, freq);

  return result;
};

function recurPermute(ds, nums, result, freq) {
  if (ds.length === nums.length) {
    result.push([...ds]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (!freq[i]) {
      ds.push(nums[i]);
      freq[i] = 1;
      recurPermute(ds, nums, result, freq);
      freq[i] = 0;
      ds.pop();
    }
  }
}

//! T => O(n! x n)
//! S => O(n) + O(n)

console.log(permutationsApproachOne([1, 2, 3]));

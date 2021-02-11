//! Count the number of subarrays having a given XOR

const countNumberOfSubArrayXOR = (array, k) => {
  const nums = {};
  let XOR = 0;
  let count = 0;

  for (const num of array) {
    XOR = XOR ^ num;

    if (XOR === k) count++;
    if (nums[XOR ^ k]) count += nums[XOR ^ k];
    if (nums[XOR]) nums[XOR] += 1;
    else nums[XOR] = 1;
  }

  console.log(nums);

  return count;
};

//! T => O(nlogn)
//! S => O(n)

console.log(countNumberOfSubArrayXOR([4, 2, 2, 6, 4], 6));

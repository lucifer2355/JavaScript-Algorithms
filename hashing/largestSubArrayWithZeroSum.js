const largestSubArrayWithZeroSum = (array) => {
  const nums = {};
  let sum = 0;
  let maxLength = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum === 0) maxLength = Math.max(maxLength, i + 1);
    if (nums[sum] === undefined) nums[array[i]] = i;
    if (nums[sum]) maxLength = Math.max(maxLength, i - nums[sum]);
  }

  return maxLength;
};

//! T => O(nlogn)
//! S => O(n)

console.log(largestSubArrayWithZeroSum([1, -1, 3, 2, -2, -8, 1, 7, 10, 2, 3]));

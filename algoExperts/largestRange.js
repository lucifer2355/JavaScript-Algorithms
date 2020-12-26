function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  let nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[num]) continue;

    nums[num] = false;
    let currentLength = 1;
    let left = num - 1;
    let right = num + 1;

    while (nums[left]) {
      nums[left] = false;
      ++currentLength;
      --left;
    }

    while (nums[right]) {
      nums[right] = false;
      ++currentLength;
      ++right;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
}

console.log(largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]));

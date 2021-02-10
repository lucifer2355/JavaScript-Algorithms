const longestSeq = (array) => {
  let result;
  let largestRange = 0;
  const nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[num]) continue;

    nums[num] = false;
    let left = num - 1;
    let right = num + 1;
    const currentSeq = [num];
    let currentLength = 1;

    while (nums[left]) {
      num[left] = false;
      currentSeq.push(left);
      currentLength++;
      left--;
    }

    while (num[right]) {
      num[right] = false;
      currentSeq.push(right);
      currentLength++;
      right++;
    }

    if (largestRange < currentLength) {
      largestRange = currentLength;
      result = currentSeq;
    }
  }

  return result;
};

console.log(longestSeq([102, 4, 100, 1, 101, 3, 2]));

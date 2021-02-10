const longestSeq1 = (array) => {
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

  //! T => O(n) + O(n) + O(n) = O(3n)
  //! S => O(n)
};

const longestSeq2 = (array) => {
  let longestLength = 0;
  const nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (nums[num - 1] === undefined) {
      let currentLength = 1;
      let currentNum = num;

      while (nums[currentNum + 1]) {
        currentNum += 1;
        currentLength++;
      }

      longestLength = Math.max(longestLength, currentLength);
    }
  }

  return longestLength;

  //! T => O(n) + O(n) + O(n) = O(3n)
  //! S => O(n)
};

console.log(longestSeq2([102, 4, 100, 1, 101, 3, 2]));

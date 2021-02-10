const longestSeq = (array) => {
  const result = [];
  const nums = {};

  for (const num of array) {
    nums[num] = true;
  }

  for (const num of array) {
    if (!nums[false]) continue;

    nums[num] = false;
    let left = num - 1;
    let right = num + 1;
    const currentSeq = [];

    while (nums[left]) {
      console.log(left);
      num[left] = false;
      currentSeq.push(num[left]);
      left--;
      console.log("left", currentSeq);
    }

    while (num[right]) {
      console.log(right);
      num[right] = false;
      currentSeq.push(num[right]);
      right++;
      console.log("right", currentSeq);
    }

    if (result.length < currentSeq.length) {
      result.push(currentSeq);
    }
  }

  return result;
};

console.log(longestSeq([102, 4, 100, 1, 101, 3, 2]));

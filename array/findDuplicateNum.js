const findDuplicate = (array) => {
  let nums = {};

  for (const num of array) {
    if (nums[num]) return num;
    else nums[num] = true;
  }
};

const totoAsMethod = (array) => {
  let slow = array[0];
  let fast = array[0];

  do {
    slow = array[slow];
    fast = array[array[fast]];
  } while (slow !== fast);

  fast = array[0];
  while (slow !== fast) {
    slow = array[slow];
    fast = array[fast];
  }

  return slow;
};

console.log(totoAsMethod([2, 5, 9, 6, 9, 3, 8, 9, 7, 1]));

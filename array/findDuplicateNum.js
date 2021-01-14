//! Try with linked list
const findDuplicate = (array) => {
  let nums = {};

  for (const num of array) {
    if (nums[num] === undefined) nums[num] = true;
    else return num;
  }
};

console.log(findDuplicate([1, 2, 3, 4, 4, 5]));

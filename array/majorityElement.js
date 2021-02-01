//* appear more than n/2
const firstApproach = (array) => {
  const n = {};
  let result;

  for (const num of array) {
    if (n[num]) {
      n[num]++;
      if (n[num] > array.length / 2) {
        result = num;
      }
    } else n[num] = 1;
  }

  return result;

  //! T => O(n)
  //! S => o(n)
};

const majorityElement = (array) => {
  //! Boyer More Voting Algorithm
  let count = 0;
  let element = 0;

  for (const num of array) {
    if (count === 0) element = num;
    else if (num === element) count++;
    else count--;
  }

  return element;

  //! T => O(n)
  //! S => O(1)
};

console.log(majorityElement([7, 7, 5, 7, 5, 1, 5, 7, 5, 5, 7, 7, 5, 5, 5, 5]));

//* appear more than n/3
const majorityElement = (array) => {
  //! 1st approach brute-force T=O(n^2) S=O(1)
  //! 2nd approach hash map T=O(n) S=O(n)
  //! 3rd Boyer More Voting Algorithm

  let element1 = -1;
  let element2 = -1;
  let count1 = 0;
  let count2 = 0;

  for (const num of array) {
    if (element1 === num) count1++;
    else if (element2 === num) count2++;
    else if (count1 === 0) {
      element1 = num;
      count1++; //! count1 = 1;
    } else if (count2 === 0) {
      element2 = num;
      count2++; //! count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  return [element1, element2];
};

//! T => O(n)
//! S => O(1)

console.log(majorityElement([1, 1, 1, 3, 3, 2, 2, 2]));

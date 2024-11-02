const twoNumberSumHash = (arr, target) => {
  const hash = {};

  for (const num of arr) {
    if (hash[target - num]) {
      return [num, target - num];
    }

    hash[num] = true;
  }

  return [];
};

console.log(twoNumberSumHash([3, 5, -4, 8, 11, 1, -1, 6], 10)); // [11, -1]

// * Time Complexity: O(n) -> Linear
// * Space Complexity: O(n) -> Linear

// * Que *//
// Only one pair of numbers will sum up to the target

// * 2nd Approach Sorting *//

const twoNumberSumSorting = (arr, target) => {
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  do {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) {
      return [arr[left], arr[right]];
    } else if (currentSum < target) {
      left++;
    } else if (currentSum > target) {
      right--;
    }
  } while (left < right);
};

console.log(twoNumberSumSorting([3, 5, -4, 8, 11, 1, -1, 6], 13)); // [5, 8]

// * Time Complexity: O(nlogn) -> Linearithmic
// * Space Complexity: O(1) -> Constant

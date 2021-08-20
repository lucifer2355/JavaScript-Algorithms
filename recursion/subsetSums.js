//! 1st. Brute Force

function func(index, sum, arr, n, sumSubset) {
  if (index === n) {
    sumSubset.push(sum);
    return;
  }

  //! pick the element
  func(index + 1, sum + arr[index], arr, n, sumSubset);

  //! Do-not pick the element
  func(index + 1, sum, arr, n, sumSubset);
}

const subSetSums = (array, n) => {
  const sumSubset = [];
  func(0, 0, array, n, sumSubset);
  sumSubset.sort((a, b) => {
    if (a < b) return -1;
  });

  return sumSubset;
};

//! T => O(2^n)
//! S => O(2^n log 2^n)

console.log(subSetSums([3, 1, 2], 3));

//* array[i] > 2 * array[j]
const reversePairs = (array) => {
  //! first approach brute-force T = O(n ^ 2); S = O (1)

  return mergeSort(array, 0, array.length - 1);
};

const mergeSort = (array, low, high) => {
  if (array.length < 2) return 0;

  const mid = Math.floor((low + high) / 2);
  let inv = mergeSort(array, low, mid);
  inv += mergeSort(array, mid + 1, high);
  inv += merge(array, low, mid, high);
  return inv;
};

const merge = (array, low, mid, high) => {
  let count = 0;
  let j = mid + 1;
  for (let i = low; i <= mid; i++) {
    while (j <= high && array[i] > 2 * array[j]) {
      j++;
    }
    count += j - (mid + 1);
  }
};

console.log(reversePairs([40, 25, 19, 12, 9, 6, 2]));

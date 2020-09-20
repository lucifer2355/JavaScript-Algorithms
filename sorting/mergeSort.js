function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  if (arr.length === 2) {
    return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
  }
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);

  const leftSortedArray = mergeSort(leftArray);
  const rightSortArray = mergeSort(rightArray);

  const mergedArray = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  while (
    leftArrayIndex < leftSortedArray.length ||
    rightArrayIndex < rightSortArray.length
  ) {
    if (
      leftArrayIndex >= leftSortedArray.length ||
      leftSortedArray[leftArrayIndex] > rightSortArray[rightArrayIndex]
    ) {
      mergedArray.push(rightSortArray[rightArrayIndex]);
      rightArrayIndex++;
    } else {
      mergedArray.push(leftSortedArray[leftArrayIndex]);
      leftArrayIndex++;
    }
  }

  return mergedArray;
}

const arr = [-10, 33, 5, 10, 3, -19, -9];
console.log(mergeSort(arr));

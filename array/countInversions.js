const countInversions = (array) => {
  let count = mergeSort({ arr: array, count: 0 });

  return count;
};

const mergeSort = (obj) => {
  if (obj.arr.length === 1) {
    return obj;
  }
  let middle = Math.floor(obj.arr.length / 2);
  let left = { arr: obj.arr.slice(0, middle), count: obj.count };
  let right = { arr: obj.arr.slice(middle), count: obj.count };
  let result = merge(mergeSort(left), mergeSort(right));
  return result;
};

function merge(leftArray, rightArray) {
  let count = leftArray.count + rightArray.count;
  const temp = [];
  let leftArrayIndex = 0;
  let rightArrayIndex = 0;

  while (
    leftArrayIndex < leftArray.arr.length ||
    rightArrayIndex < rightArray.arr.length
  ) {
    if (
      leftArrayIndex >= leftArray.arr.length ||
      leftArray.arr[leftArrayIndex] > rightArray.arr[rightArrayIndex]
    ) {
      temp.push(rightArray.arr[rightArrayIndex]);
      rightArrayIndex++;
      count += leftArray.arr.length - leftArrayIndex;
    } else {
      temp.push(leftArray.arr[leftArrayIndex]);
      leftArrayIndex++;
    }
  }

  return { arr: temp, count };
}

console.log(countInversions([5, 3, 2, 4, 1]));

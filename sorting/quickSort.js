function quickSort(arr) {
  let copiedArray = [...arr];

  if (copiedArray.length <= 1) {
    return copiedArray;
  }

  const smallerElementArray = [];
  const biggerElementArray = [];
  const pivotElementArray = copiedArray.shift();
  const centerElementArray = [pivotElementArray];

  while (copiedArray.length) {
    const currentElement = copiedArray.shift();
    if (currentElement === pivotElementArray) {
      centerElementArray.push(currentElement);
    } else if (currentElement < pivotElementArray) {
      smallerElementArray.push(currentElement);
    } else {
      biggerElementArray.push(currentElement);
    }
  }

  const smallerElementSortedArray = quickSort(smallerElementArray);
  const biggerElementSortedArray = quickSort(biggerElementArray);
  return smallerElementSortedArray.concat(
    centerElementArray,
    biggerElementSortedArray
  );
}

//! Best Case: T => O(n * log n)
//! Average Case: T => O(n * log n)
//! Worst Case: T => O(n^2)

const arr = [-3, 10, 1, 100, -10, 22, 15];
console.log(quickSort(arr));

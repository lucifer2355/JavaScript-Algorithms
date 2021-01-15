const mergeSortedArray = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > array2[0]) {
      let temp = array1[i];
      array1[i] = array2[0];
      array2[0] = temp;
      array2.sort((a, b) => a - b);
    }
  }

  return [array1, array2];
};

console.log(mergeSortedArray([1, 4, 7, 8, 10], [2, 3, 9]));

const sort012 = (array, n) => {
  let low = 0;
  let high = n - 1;
  let mid = 0;

  while (mid <= high) {
    switch (array[mid]) {
      //! If element is 0
      case 0:
        let tempLow = array[low];
        array[low] = array[mid];
        array[mid] = tempLow;
        low++;
        mid++;
        break;

      //! If element is 1
      case 1:
        mid++;
        break;

      //! If the element is 2;
      case 2:
        let temp = array[high];
        array[high] = array[mid];
        array[mid] = temp;
        mid++;
        high--;
        break;
    }
  }

  return array;
};

console.log(sort012([0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2], 12));

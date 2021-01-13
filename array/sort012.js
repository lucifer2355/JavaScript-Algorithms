const sort012 = (array, n) => {
  let low = 0;
  let mid = 0;
  let high = n - 1;

  while (mid <= high) {
    switch (array[mid]) {
      case 0:
        let tempLow = array[low];
        array[low] = array[mid];
        array[mid] = tempLow;
        mid++;
        low++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        let tempHigh = array[high];
        array[high] = array[mid];
        array[mid] = tempHigh;
        mid++;
        high--;
        break;
    }
  }

  return array;
};

console.log(sort012([0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 2, 2], 12));

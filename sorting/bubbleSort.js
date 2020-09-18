function bubbleSort(arr) {
  const resultArray = [...arr];

  for (let i = 0; i < resultArray.length; i++) {
    let outerEl = resultArray[i];

    for (let j = i + 1; j < resultArray.length; j++) {
      let innerEl = resultArray[j];

      if (outerEl > innerEl) {
        resultArray[i] = innerEl;
        resultArray[j] = outerEl;

        outerEl = resultArray[i];
        innerEl = resultArray[j];
      }
    }
  }

  return resultArray;
}

const arr = [5, 10, -3, -10, 1, 100, 99];
console.log(bubbleSort(arr));

const reversArray = (array) => {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    let temp = array[startIndex];
    array[startIndex] = array[endIndex];
    array[endIndex] = temp;
    startIndex++;
    endIndex--;
  }
  return array;
};

console.log(reversArray([1, 2, 3, 4, 5, 6]));

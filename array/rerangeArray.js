const rerange = (array) => {
  let mid = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      let temp = array[i];
      array[i] = array[mid];
      array[mid] = temp;
      mid++;
    }
  }

  return array;
};

console.log(rerange([-1, 2, -3, 4, 5, 6, -7, 8, 9]));

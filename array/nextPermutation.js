const nextPermutation = (array) => {
  let breakPoint;
  let j;
  for (breakPoint = array.length - 2; breakPoint >= 0; breakPoint--) {
    if (array[breakPoint] < array[breakPoint + 1]) break;
  }

  console.log(breakPoint);

  if (breakPoint < 0) array.reverse();
  else {
    for (j = array.length - 1; j > breakPoint; j--) {
      if (array[j] > array[breakPoint]) break;
    }

    let temp = array[breakPoint];
    array[breakPoint] = array[j];
    array[j] = temp;
    array.reverse();
  }

  return array;
};

console.log(nextPermutation([1, 3, 5, 4, 2]));

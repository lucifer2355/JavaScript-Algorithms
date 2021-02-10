//* return array element whose sum is target

const fourSum = (array, target) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = j + 1; k < array.length; k++) {
        const temp = target - array[i] + array[j] + array[k];
        if (array.includes(temp))
          result.push([array[i], array[j], array[k], temp]);
        else if (temp === 0) result.push([array[i], array[j], array[k]]);

        console.log(result, temp);
      }
    }
  }

  return result;
};

console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));

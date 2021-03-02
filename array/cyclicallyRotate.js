const cyclicallyRotate = (array) => {
  for (let i = array.length - 2; i >= 0; i--) {
    let temp = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }

  return array;
};

//! T => O(n)
//! S => T(1)

console.log(cyclicallyRotate([1, 2, 3, 4, 5]));

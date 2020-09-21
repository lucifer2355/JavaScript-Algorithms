function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }

  return product;
}

//* Time Complexity
//! T => O(n * m) (n = setA length, m = setB length)

//* Space Complexity
//! S => O(n * m)

const setA = ["blue", "red"];
const setB = ["s", "m", "l"];

console.log(cartProduct(setA, setB));

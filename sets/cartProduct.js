function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    // if (!Array.isArray(setAEl)) {
    //   setAEl = [setAEl];
    // }

    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }

  return product;
}

//* Time Complexity
//! T => O(n^x) (x = no. of input array)

//* Space Complexity
//! S => O(n^x) (x = no. of input array)

function cartesian(...sets) {
  let tempProduct = sets[0];

  for (let i = 1; i < sets.length; i++) {
    tempProduct = cartProduct(tempProduct, sets[i]);
  }

  return tempProduct;
}

const colors = ["blue", "red"];
const size = ["s", "m", "l"];
const styles = ["round neck", "v neck"];

// console.log(cartProduct(colors, size));
console.log(cartesian(colors, size, styles));
// cartesian(colors, size, styles);

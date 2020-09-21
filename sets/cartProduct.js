function cartProduct(setA, setB) {
  const product = [];

  for (const setAEl of setA) {
    for (const setBEl of setB) {
      product.push([setAEl, setBEl]);
    }
  }

  return product;
}

const setA = ["blue", "red"];
const setB = ["m", "l"];

console.log(cartProduct(setA, setB));

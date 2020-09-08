function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  let divideNumber = n;
  while (divideNumber !== 1) {
    if (divideNumber % 2 !== 0) {
      return false;
    }
    divideNumber = divideNumber / 2;
  }
  return true;
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));

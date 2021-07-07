const isPowerOfTwo = (n) => {
  if (n === 1) return true;
  if (n % 2 !== 0) return false;

  return isPowerOfTwo(Math.floor(n / 2));
};

console.log(isPowerOfTwo(6));

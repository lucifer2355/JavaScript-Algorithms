const isPowerOfThree = (n) => {
  if (n <= 0) return false;
  else if (n === 1) return true;
  else if (n % 3 !== 0) return false;

  return isPowerOfThree(Math.floor(n / 3));
};

console.log(isPowerOfThree(45));

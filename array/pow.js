//! is n is negative? x^n

const pow = (x, n) => {
  let ans = 1;
  let power = n;
  if (power < 0) power = -1 * n;

  while (power > 0) {
    if (power % 2 === 1) {
      ans = ans * x;
      power = power - 1;
    } else {
      x = x * x;
      power = power / 2;
    }
  }
  if (n < 0) ans = 1 / ans;
  return ans;
};

//! T => log2n
//! S => O(1)

console.log(pow(2, 4));

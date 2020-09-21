function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

//! T => O(n) => Linear Time Complexity

//! S => O(1)

console.log(factorial(5));

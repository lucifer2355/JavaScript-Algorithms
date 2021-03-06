function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}
//* Time Complexity
//! In every function call => O(1)
//! But we trigger multiple function calls => n function calls
//! T => n * O(1) => O(n)

//* Space Complexity
//! S => O(n)

console.log(factorial(5));

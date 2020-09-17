function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

//! In every function call => O(1)
//! But we trigger multiple function calls => n function calls
//! T => n * O(1) => O(n)

console.log(factorial(5));

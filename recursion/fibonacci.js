function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

//! Recursion method is not best approach for this problem
//! Loop-based solution: O(n)
//! Exponential Time Complexity: O(n^2)

console.log(fibonacci(5));

function fibonacci(n, memo) {
  let result;

  if (memo[n]) {
    return memo[n];
  }

  if (n === 0 || n === 1) {
    result = 1;
  } else {
    result = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

//! Time Complexity: O(n)

console.log(fibonacci(5, {}));

function fibonacci(n) {
  const number = [1, 1]; //* 1
  for (let i = 2; i < n + 1; i++) {
    //* 1
    number.push(number[i - 2] + number[i - 1]); //* n - 1
  }
  return number[n]; //* 1
}

//! T = 1 + 1 + n - 1 + 1 = 2 + n = n
//! O(n) => Linear Time Complexity

console.log(fibonacci(5));

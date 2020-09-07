function isPrime(n) {
  for (let i = 2; i < n; i++) {
    //* 1
    if (n % i === 0) {
      //* n
      return false; //* 1
    }
  }
  return true; //* 1
}

//! T = 1 + n - 2 + 1 + 1 = 1 + n = n
//! Best Case: n = 1 OR n = 2 => O(1)
//! Average Case: O(n)
//! Worst Case: n = 10,000 => O(n)

console.log(isPrime(5));

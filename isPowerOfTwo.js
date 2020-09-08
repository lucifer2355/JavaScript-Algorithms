// function isPowerOfTwo(n) {
//   if (n < 1) {
//     //* 1
//     return false; //* 1
//   }
//   let divideNumber = n; //* 1
//   while (divideNumber !== 1) {
//     //* 1
//     if (divideNumber % 2 !== 0) {
//       //* n
//       return false; //* 1
//     }
//     divideNumber = divideNumber / 2; //* n
//   }
//   return true; //* 1
// }

//! Best Case: n = 13 => T => O(1)
//! Average Case: O(log n)
//! Wrost Case: n = 1,000,000....... => T => O(log n)

//* Improve Solution

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  //* bite wise notation | Binary
  return (n & (n - 1)) === 0; //* n
}

//! T => O(n)

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(16));
console.log(isPowerOfTwo(20));

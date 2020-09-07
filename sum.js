// function sum(n) {
//   return (n / 2) * (1 + n);
// }

function sum(numbers) {
  let result = 0; //* 1
  for (const number of numbers) {
    //* 1
    result += number; //* n
  }
  return result; //* 1
}

//* T = 3 + 1*n
//* T = n
//* T = n => O(n) => Linear Time Complexity

console.log(sum([1, 2, 3]));

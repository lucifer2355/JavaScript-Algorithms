function minNum(numbers) {
  let minNumber = numbers[0]; //* 1
  for (const num of numbers) {
    //* 1
    if (minNumber > num) {
      //* n
      minNumber = num; //* 0 (Best Case), n - 1 (Worst Case), 1 (Average Case)
    }
  }
  //   return numbers.sort((a, b) => a - b)[0];
  return minNumber; //* 1
}

//! Best Case: [1, 2, 3] => n => O(n)
//! Worst Case: [3, 2, 1] => n => O(n)
//! Average Case: [2, 1, 3] => n => O(n)

console.log(minNum([1, 2, 3]));

function minNum(numbers) {
  let minNumber = numbers[0]; //* 1
  for (let i = 1; i <= numbers.length; i++) {
    //* 1
    if (minNumber > numbers[i]) {
      //* 1
      minNumber = numbers[i]; //* n
    }
  }
  //   return numbers.sort((a, b) => a - b)[0];
  return minNumber; //* 1
}

console.log(minNum([1, 2, 3]));

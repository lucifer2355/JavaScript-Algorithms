const numDifferentIntegers = (word) => {
  const string = word.split("");
  const integers = [];

  for (let i = 0; i < string.length; i++) {
    if (isNaN(parseFloat(string[i]))) continue;
    let num = "";

    while (!isNaN(parseInt(string[i]))) {
      num = "" + num + parseInt(string[i]);
      i++;
    }

    if (!integers.includes(num)) integers.push(num);
  }

  return integers.length;
};

console.log(numDifferentIntegers("a123bc34d8ef34"));

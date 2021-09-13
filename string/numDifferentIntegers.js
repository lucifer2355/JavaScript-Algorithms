const numDifferentIntegers = (word) => {
  const string = word.split("");
  const integers = [];

  for (let i = 0; i < string.length; i++) {
    if (isNaN(parseFloat(string[i]))) continue;
    let num = "";

    while (!isNaN(parseInt(string[i]))) {
      num = "" + num + parseInt(string[i]);

      if (num.length >= 2 && num[0] === "0") num = num.slice(1);

      i++;
    }

    if (!integers.includes(num)) integers.push(num);
  }

  return integers.length;
};

console.log(numDifferentIntegers("a1b01c001"));

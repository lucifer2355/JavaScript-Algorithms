const shuffleString = (s, indices) => {
  const result = new Array(indices.length);
  const string = s.split("");

  for (let i = 0; i < indices.length; i++) {
    result[indices[i]] = string[i];
  }

  return result.join("");
};

console.log(shuffleString("codeleet", [4, 5, 6, 7, 0, 2, 1, 3]));

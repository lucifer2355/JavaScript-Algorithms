const numJewelsInStones = (J, S) =>
  S.split("").filter((char) => J.indexOf(char) !== -1).length;

console.log(numJewelsInStones("aAAbbbb"));

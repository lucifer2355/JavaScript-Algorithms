const reverseString = (s, sIndex = 0, eIndex = s.length - 1) => {
  if (sIndex > eIndex) return s;

  [s[sIndex], s[eIndex]] = [s[eIndex], s[sIndex]];

  return reverseString(s, sIndex + 1, eIndex - 1);
};

console.log(reverseString(["h", "e", "l", "l", "o"]));

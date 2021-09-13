const validPalindromeStr = (s) => {
  if (s === s.split("").reverse().join("")) return true;

  for (let i = 1; i < s.length; i++) {
    s = s.split("");

    console.log(s);

    // if (s === s.split("").reverse().join("")) return true;
    // else s = s;
  }

  return false;
};

console.log(validPalindromeStr("abc"));

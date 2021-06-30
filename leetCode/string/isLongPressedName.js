const isLongPressedName = (name, typed) => {
  for (let i = 0; i < name.length; i++) {
    for (let j = 0; j < typed.length; j++) {
      if (name[i] === typed[j]) {
        i++;
        continue;
      } else if (typed[j] === name[i - 1]) {
        continue;
      } else return false;
    }

    if (i === name.length - 1) return false;
  }

  return true;
};

console.log(isLongPressedName("pyplrz", "ppyypllr"));

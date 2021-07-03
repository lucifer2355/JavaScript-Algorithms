const howSumWithOutDP = (target, array) => {
  if (target === 0) return [];
  if (target < 0) return null;

  for (const num of array) {
    const reminder = target - num;
    const reminderResult = howSumWithOutDP(reminder, array);

    if (reminderResult !== null) return [...reminderResult, num];
  }

  return null;
};

console.log(howSumWithOutDP(7, [5, 3, 4, 7]));

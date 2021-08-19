const fractionalKnapsack = (items, W, n) => {
  items.sort((a, b) => {
    if (a.value / a.weight > b.value / b.weight) return -1;
  }); //! O(nlogn)
  let maxValue = 0;

  for (const item of items) {
    if (W > item.weight) {
      W -= item.weight;
      maxValue += item.value;
    } else if (W !== 0 && W < item.weight) {
      maxValue += (item.value / item.weight) * W;
      W = 0;

      break;
    }
  } //! O(n)

  return maxValue;
};

//! T => O(nlogn)
//! S => O(1)

console.log(
  fractionalKnapsack(
    [
      { weight: 10, value: 60 },
      { weight: 30, value: 120 },
      { weight: 20, value: 100 },
    ],
    50,
    3
  )
);

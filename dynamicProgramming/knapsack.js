function knapsack(items, cap, index) {
  if (cap === 0 || index < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[index].weight) {
    return knapsack(items, cap, index - 1);
  }

  const sackWithItem = knapsack(items, cap - items[index].weight, index - 1);
  const sackWithoutItem = knapsack(items, cap, index - 1);

  const valueWithItem = sackWithItem.value + items[index].value;
  const valueWithoutItem = sackWithoutItem.value;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[index]),
      value: sackWithItem.value + items[index].value,
      weight: sackWithItem.weight + items[index].weight,
    };
    return updatedSack;
  } else {
    return sackWithoutItem;
  }
}

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 11;

const allPermutations = knapsack(items, maxCap, items.length - 1);
console.log(allPermutations);

function knapsackFn(items, cap, index, memo) {
  if (memo[cap][index]) {
    return memo[cap][index];
  }

  if (cap === 0 || index < 0) {
    return { items: [], value: 0, weight: 0 };
  }

  if (cap < items[index].weight) {
    return knapsackFn(items, cap, index - 1);
  }

  const sackWithItem = knapsackFn(
    items,
    cap - items[index].weight,
    index - 1,
    memo
  );
  const sackWithoutItem = knapsackFn(items, cap, index - 1, memo);

  const valueWithItem = sackWithItem.value + items[index].value;
  const valueWithoutItem = sackWithoutItem.value;

  let resultSack;

  if (valueWithItem > valueWithoutItem) {
    const updatedSack = {
      items: sackWithItem.items.concat(items[index]),
      value: sackWithItem.value + items[index].value,
      weight: sackWithItem.weight + items[index].weight,
    };
    resultSack = updatedSack;
  } else {
    resultSack = sackWithoutItem;
  }

  memo[cap][index] = resultSack;
  return resultSack;
}

function knapsack(items, cap, index) {
  const mem = Array(cap + 1).fill(Array(items.length).fill(undefined));
  return knapsackFn(items, cap, index, mem);
}

//! Time Complexity (without memoization): O(2^n)
//! Time Complexity (with memoization): O(n*C) (C = maxCap)

const items = [
  { name: "a", value: 3, weight: 3 },
  { name: "b", value: 6, weight: 8 },
  { name: "c", value: 10, weight: 3 },
];

const maxCap = 11;

const allPermutations = knapsack(items, maxCap, items.length - 1);
console.log(allPermutations);

const mergeTwoSortedList = (l1, l2) => {
  return l1.concat(l2).sort((a, b) => a - b);
};

console.log(mergeTwoSortedList([1, 2, 4], [1, 3, 4]));

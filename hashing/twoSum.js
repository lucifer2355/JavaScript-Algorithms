const twoSum = (array, target) => {
  //! first approach brute-force T = O(n^2); S = O(1)
  let hashTable = {};
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const temp = target - array[i];
    if (hashTable[temp] === undefined) hashTable[array[i]] = i;
    else result.push(hashTable[temp], i);
  }

  return result;
};

//! T => O(n)
//! S => O(1)

console.log(twoSum([2, 6, 5, 8, 11], 14));

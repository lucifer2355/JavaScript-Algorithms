//* The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
//* By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

//* "123"
//* "132"
//* "213"
//* "231"
//* "312"
//* "321"

//! 1st approach brute force [T => O(n! x n)]

const permutationSequence = (n, k) => {
  let fact = 1;
  const numbers = [];
  let ans = "";

  for (let i = 1; i < n; i++) {
    fact *= i;
    numbers.push(i);
  }
  numbers.push(n);

  k = k - 1;
  while (true) {
    ans = ans + numbers[Math.floor(k / fact)];
    numbers.splice(k / fact, 1);
    if (numbers.length === 0) {
      break;
    }
    k = k % fact;
    fact = fact / numbers.length;
  }

  return ans;
};

//! T => O(n) x O(n) = O(n ^ 2)
//! S => O(n)

console.log(permutationSequence(4, 17));

const climbStairs = (n) => {
  let prev = 0;
  let cur = 1;
  let temp;

  for (let i = 0; i < n; i++) {
    temp = prev;
    prev = cur;
    cur += temp;
    console.log(temp, prev, cur);
  }
  return cur;
};

const main = () => {
  const number = 5;

  console.log(`Number of ways to climb ${number} stairs in ` + climbStairs(5));
};

// testing
main();

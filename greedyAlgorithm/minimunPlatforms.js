const minimumPlatforms = (arr, dept, n) => {
  arr.sort((a, b) => a < b); //! O(nlogn)
  dept.sort((a, b) => a < b); //! O(nlogn)

  let platforms = 1;
  let platformNeeded = 1;

  let i = 1;
  let j = 0;

  while (i < n && j < n) {
    if (arr[i] <= dept[j]) {
      platformNeeded++;
      i++;
    } else if (arr[i] >= arr[j]) {
      platformNeeded--;
      j++;
    }
    if (platformNeeded > platforms) platforms = platformNeeded;
  } //! O(n)

  return platforms;
};

//! T => O(2nlogn)
//! S => O(1)

console.log(
  minimumPlatforms(
    [0900, 0940, 0950, 1100, 1500, 1800],
    [0910, 1200, 1120, 1130, 1900, 2000],
    6
  )
);

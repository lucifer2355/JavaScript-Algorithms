function findElement(arr, element) {
  let index = 0;
  for (const n of arr) {
    if (n === element) {
      return index;
    }
    index++;
  }
}

//! Best Case: T => O(1)
//! Average Case: T=> O(n)
//! Worst Case: T => O(n)

const arr = [5, 3, 10, -10, 33, 51];
console.log(findElement(arr, 10));

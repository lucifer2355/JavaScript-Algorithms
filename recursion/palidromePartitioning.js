//* Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s. *//

//! 1st approach brute force

const palindromePartitioning = (string) => {
  const result = [];
  findPalindromePartitioning(0, [], string, result);

  return result;
};

function findPalindromePartitioning(index, ds, string, result) {
  if (index === string.length) {
    result.push([...ds]);
    return;
  }

  for (let i = index; i < string.length; ++i) {
    if (isPalindrome(string, index, i)) {
      ds.push(string.substring(index, i + 1));
      findPalindromePartitioning(i + 1, ds, string, result);
      ds.pop();
    }
  }
}

function isPalindrome(string, start, end) {
  while (start <= end) {
    if (string[start++] !== string[end--]) {
      return false;
    }

    return true;
  }
}

console.log(palindromePartitioning("aabb"));

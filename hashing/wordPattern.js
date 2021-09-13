const wordPattern = (pattern, s) => {
  const words = s.split(" ");
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
  }

  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));

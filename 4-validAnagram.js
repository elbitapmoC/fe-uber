const isAnagram = (a, b) => {
  let lenA = a.length;
  let lenB = b.length;
  if (lenA !== lenB) return false;
  let table = {};
  for (let letter of a) {
    if (!table[letter]) {
      table[letter] = 0;
    }
    table[letter]++;
  }

  for (let letter of b) {
    if (!table[letter]) {
      return false;
    }
    table[letter]--;
  }

  return true;
};

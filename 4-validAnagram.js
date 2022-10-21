const isAnagram = (a, b) => {
  // store the length of each array: a & b
  let lenA = a.length;
  let lenB = b.length;
  // if the anagrams are not the same length return false.
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

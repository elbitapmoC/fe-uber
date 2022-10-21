const isAnagram = (a, b) => {
  // store the length of each array: a & b
  const lenA = a.length;
  const lenB = b.length;
  // if the anagrams are not the same length return false.
  if (lenA !== lenB) return false;

  // create empty object for later use.
  let key = {};

  // (for of)
  // iterate through a
  for (const letter of a) {
    // check if object contains letter
    // if object does ! contain letter, initialize with 0
    // incrememnt letter by one.
    if (!key[letter]) {
      key[letter] = 0;
    }
    key[letter]++;
  }

  // (for of)
  // iterate through b
  for (const letter of b) {
    // if this character does not exists inside object, go ahead and return false
    if (!key[letter]) {
      return false;
    }
    // decrement 1 from letter in object.
    key[letter]--;
  }

  return true;
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));

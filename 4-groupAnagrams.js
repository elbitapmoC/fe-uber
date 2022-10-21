const groupAnagram = (strs) => {
  // create empty object to use later
  let obj = {};
  // iterate through strs[]
  // (for of)
  for (let i of strs) {
    // i is the name for each entry in our array.
    // cut out each character
    // sort abc order
    // join letters together
    // store inside a variable.
    let key = i.split("").sort().join("");
    // condition: if this key doesn't exist in the object, create it and store the item as an array.
    if (!obj[key]) {
      obj[key] = [i];
    } else {
      obj[key].push(i);
    }
  }
  console.log(obj);
  // if this key does exist push the value.
  return Object.values(obj);
};

console.log(groupAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));

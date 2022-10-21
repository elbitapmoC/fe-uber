const split = (string, delimiter) => {
  const res = [];
  if (delimiter === "") return Array.from(string);
  const startSplit = (str, i) => {
    if (i >= str.length) return;
    const index = str.indexOf(delimiter);
    if (index >= 0) {
      res.push(str.substring(0, index));
      startSplit(
        str.substring(index + delimiter.length),
        index + delimiter.length
      );
    } else {
      res.push(str);
    }
  };
  startSplit(str, 0);
  return res;
};

console.log(split("The quick the fox jumps the lazy dog.", "the"));
console.log(split("The quick the fox jumps the lazy dog.", ""));
console.log(split("The quick the fox jumps the lazy dog.", " "));

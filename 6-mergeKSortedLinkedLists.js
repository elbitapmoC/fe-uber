// Input: [
// 1 -> 4 -> 5,
// 1 -> 3 -> 4,
// 2 -> 6
// ]

var mergeKLists = function (lists) {
  // empty []
  var res = [];
  // var w/ null value
  var tmp = null;
  // iterate through lists[]
  for (var i = 0; i < lists.length; i++) {
    tmp = lists[i];
    while (tmp !== null) {
      res.push(tmp);
      tmp = tmp.next;
    }
  }
  res.sort((a, b) => a.val - b.val);
  for (var j = 0; j < res.length; j++) {
    res[j].next = res[j + 1] || null;
  }
  return res[0] || null;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

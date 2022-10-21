const twoSum = function (nums, target) {
  // create a Map
  const map = new Map();

  // iterate through nums
  for (let i = 0; i < nums.length; i++) {
    // store current value
    const current = nums[i];
    // store difference
    const difference = target - current;
    // check to see if your Map contains the difference
    // IF yes, return the key value pair
    if (map.has(difference)) return [map.get(difference), i];
    // ELSE set map using current and index
    else map.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

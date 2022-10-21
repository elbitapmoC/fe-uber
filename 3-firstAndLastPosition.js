var searchRange = function (nums, target) {
  // [-1,-1] is initial answer for if target doesn't exist within the array or if the array is empty.
  let answer = [-1, -1];
  // boolean to check if we've gone through the first index value
  let check = true;
  // iterate through nums array
  for (let i = 0; i < nums.length; i++) {
    // condition: check each number in array if it is equal to target
    if (nums[i] === target && check) {
      // index 0 set to index
      answer[0] = i;
      // index 1 set to index
      answer[1] = i;
      check = false;
    } else {
      // updating boolean since we went through the first position check
      // check if current index in array equals target
      if (nums[i] === target) {
        // index 1 set to index
        answer[1] = i;
      }
    }
    return answer;
  }
};

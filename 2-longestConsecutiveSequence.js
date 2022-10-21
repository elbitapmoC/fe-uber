// Given unsorted array (integers), return the length of the longest conseutive elements sequence.
// Input: nums = [100,4,200,1,3,2]
// Output: 4 (because 1,2,3,4)

const longestConsecutive = (nums) => {
  if (!nums.length) return 0;

  // Updates variable to store only unique values also organizes values from Lowest to Highest
  nums = [...new Set(nums.sort((a, b) => a - b))];

  let consecutiveCount = 1;
  let countArray = [];

  // Iterate through array
  for (let i = 0; i < nums.length; i++) {
    // Logic check for consecutive next number.
    // Does this number + 1 equal the next indexed element?
    // If yes, add to consecutive count.
    if (nums[i] + 1 === nums[i + 1]) {
      consecutiveCount++;
    } else {
      countArray.push(consecutiveCount);
      // reset count
      consecutiveCount = 1;
    }
  }
  // returns the largest number that was pushed into the array.
  return Math.max(...countArray);
};

const arr = [9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6];
console.log(longestConsecutive(arr));

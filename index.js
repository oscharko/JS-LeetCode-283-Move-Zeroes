let nums = [1, 2]

const moveZeroesFirstSolution = function(nums) {
  if (nums.length > 1 && nums.reduce((a, b) => a + b) != 0 && nums.indexOf(0) != -1) {
    nums.sort(function(a, b) { return a - b })
    while (nums[0] === 0) {
      nums.shift()
      nums.push(0)
    }
    return nums
  } else {
    return nums
  }
};

const moveZeroes = function(nums) {
  let indexOfZero = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[indexOfZero] = nums[i];
      indexOfZero++;
    }
  }
  for (let i = indexOfZero; i < nums.length; i++) {
    nums[i] = 0;
  }
  return nums
};

console.log(moveZeroes(nums))
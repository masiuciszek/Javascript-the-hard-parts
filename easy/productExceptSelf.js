/* eslint-disable prefer-const */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
  let res = [1];
  let right = 1;
  for (let i = 1; i < nums.length; i += 1) {
    res.push(res[i - 1] * nums[i - 1]);
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    res[i] = res[i] * right;
    right *= nums[i];
  }
  console.log(res);
  // console.log(res);
};

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]

// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

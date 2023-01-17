/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      //因为数组中被删了一个，所以nums[i]会不符合预期的数字，i需要往前移动一位
      i--
    }
  }
  for (let i = nums.length; i < len; i++) {
    nums.push(0);
  }
}
// @lc code=end

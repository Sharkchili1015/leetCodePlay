/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  //头尾双指针
  let left: number = 0;
  let right: number = 0;
  while (right < nums.length) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      //必须先修改nums[left]的值，再移动left指针
      left++;
    }
    right++;
  }
  return left;
}
// @lc code=end

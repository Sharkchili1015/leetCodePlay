/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 丢失的数字
 */

// @lc code=start
function missingNumber(nums: number[]): number {
    const len = nums.length;
    let sum1 = 0,
      sum2 = 0;
  for (let i = 0; i <= len; i++) {
      //nums的总和
      if (nums[i]) {
        sum1 += nums[i];
      }
      sum2 += i;
    }
    return sum2 - sum1

  //hash解法
//   let hash = new Map();
//   for (let num of nums) {
//     hash.set(num, true);
//   }
//   for (let i = 0; i <= nums.length; i++) {
//     if(hash.has(i) === false) return i
//   }
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  const show = Math.floor(nums.length / 2);
  let hash = new Map();

  for (let num of nums) {
    if (hash.has(num)) {
      //目前存key的值
      let currentVal = hash.get(num);
      hash.set(num, currentVal + 1);
    } else {
      hash.set(num, 1);
    }
    if (hash.get(num) > show) return num;
  }
}
// @lc code=end

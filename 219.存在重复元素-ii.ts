/*
 * @lc app=leetcode.cn id=219 lang=typescript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hash.has(nums[i])) {
      const diff = Math.abs(hash.get(nums[i]) - i);
      if (diff <= k) return true;
    }
    hash.set(nums[i], i);
  }

  return false;
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  //nums是一个有序数组，使用二分查找法
  let slow: number = 0,
    fast: number = nums.length - 1;
  //如果fast < slow跳出循环输出fast+1
  // 例子[1,2,3,5,6] target = 4
  while (slow <= fast) {
    //取中间数
    const mid: number = Math.floor((slow + fast) / 2);
    if (nums[mid] === target) {
      // 如果mid刚好等于target，直接返回mid
      return mid;
    } else if (nums[mid] < target) {
      //将slow指针移动到mid+1因为mid左边（包括mid）没有比target更大的数
      slow = mid + 1;
    } else {
      //同理，如果mid比target大，将fast指针移动到mid - 1
      fast = mid - 1;
    }
  }
  return fast + 1;
}
// @lc code=end

/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  //使用双指针法对nums数组进行去重
  let slow: number = 0;
  let fast: number = 0;
  while(fast < nums.length){
    if(nums[fast] !== nums[slow]){
        slow++;
        nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
}
// @lc code=end

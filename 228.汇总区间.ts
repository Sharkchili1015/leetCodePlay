/*
 * @lc app=leetcode.cn id=228 lang=typescript
 *
 * [228] 汇总区间
 */

// @lc code=start
function summaryRanges(nums: (number | string)[]): string[] {
  const tar: string[] = [];
  //指针开头都在第一位
  let last = nums[0];
  let start = nums[0];
  //添加一个哨兵节点
  nums.push("end");
  for (let i = 1; i < nums.length; i++) {
    if ((nums[i] as number) - 1 !== last) {
      //进入if表示已经进入不连续的数字区间
      if (start === last) {
        //如果是单个数字
        tar.push(`${last}`);
        start = nums[i];
        last = nums[i];
      } else {
        //如果为一个数字区间
        tar.push(`${start}->${last}`);
        start = nums[i];
      }
    }
    //移动last指针
    last = nums[i];
  }
  return tar;
}
// @lc code=end

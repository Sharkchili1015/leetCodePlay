/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  //差值交换解法
  let res: number = 0;
  const len = prices.length;
  let max = prices[len];
  for (let i = len; i >= 0; i--) {
    if (max > prices[i - 1]) {
      //将此时得差价存入res
      res = Math.max(res, max - prices[i - 1]);
    } else {
      //如果左边的数比max大，移动max
      max = prices[i - 1];
    }
  }
  return res
}
// @lc code=end

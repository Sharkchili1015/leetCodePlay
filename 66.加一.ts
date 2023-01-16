/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 */

// @lc code=start
function plusOne(d: number[]): number[] {
  //这种写法无法适用于大整数相加，会造成溢出
  //将数组转换为数字
  // let num: number = parseInt(d.join(''));
  // //将数字加一
  // num++;
  // //将数字转换为数组
  // let arr: number[] = num.toString().split('').map(_ => +_);
  // //将数组中的每一项转换为数字
  // return arr;
  // 暴力解法
  //   let addOne: boolean = false; //是否要向前进1标识
  //   const len = d.length - 1;
  //   for (let i = len; i >= 0; i--) {
  //     if (addOne) {
  //       if (d[i] + 1 === 10) {
  //         d[i] = 0;
  //         addOne = true;
  //       } else {
  //         d[i] = d[i] + 1;
  //         addOne = false;
  //         return d;
  //       }
  //     } else {
  //       if (d[i] + 1 === 10) {
  //         d[i] = 0;
  //         addOne = true;
  //       } else {
  //         d[i] = d[i] + 1;
  //         addOne = false;
  //         return d;
  //       }
  //     }
  //   }
  //   if (addOne) {
  //     d.unshift(1);
  //     return d;
  //   }
  //while反转
  let len = d.length - 1;
  let add: 0 | 1 = 0;
  let res: number[] = [];
  if (len >= 0) {
    // 最后一位加一是否等于10
    const sum = d[len] + add + 1;
    //如果等于10将0push进数组，反之将加一后的数字push进数组
    res.push(sum % 10);
    //如果最后一位数字加一等于10，add=1，反之add = 0
    add = Math.floor(sum / 10) as 0 | 1;
    //计算位左移
    len--;
  }
  while (len >= 0) {
    //如果有进一，则加一
    const sum = d[len] + add;
    //如果等于10将0push进数组，反之将加一后的数字push进数组
    res.push(sum % 10);
    //如果最后一位数字加一等于10，add=1，反之add = 0
    add = Math.floor(sum / 10) as 0 | 1;
    //计算位左移
    len--;
  }
  //如果数组为[9,9]则将1push进数组最后一位
  if(add) res.push(1);
  //反转数组
  return res.reverse()
}
// @lc code=end

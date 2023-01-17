/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const hash = new Map();
    for(let num of nums){
       if(hash.has(num)) return true
       hash.set(num,1)
    }
    return false
};
// @lc code=end


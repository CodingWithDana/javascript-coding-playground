function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

// test cases
const nums = [3,4,5,6];
const nums1 = [4,5,6,7];
const target = 7;
const target1 = 11;

console.log(twoSum(nums, target));
console.log(twoSum(nums1, target1));

function hasDuplicate(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
}

// test case
const nums = [1,3,2,3];
const nums1 = [1,2,3,4];
const nums2 = [1,2,3,3];
console.log(hasDuplicate(nums));
console.log(hasDuplicate(nums1));
console.log(hasDuplicate(nums2));
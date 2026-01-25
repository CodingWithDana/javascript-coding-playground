// You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

// Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

function search(nums, target) {
    // start of search range
    let left = 0;
    // end of search range
    let right = nums.length - 1;

    // keep searching while there's a valid range
    while (left <= right) {
        // find the middle index
        const mid = Math.floor((left + right) / 2);

        // check the middle value
        if (nums[mid] === target){
            return mid;
        }

        // if target is bigger than the middle value, search the right half
        if (nums[mid] < target){
            // target must be on the right side
            left = mid + 1;
        } else {
            // otherwise target is smaller than the middle value, search the left half
            right = mid - 1;
        }
    }
    // target not found in the array
    return -1;
}

const nums = [-1,0,2,4,6,8]
const target = 8
console.log(search(nums, target))
const nums1 = [-1,0,2,4,6,8]
const target1 = 3
console.log(search(nums1, target1))
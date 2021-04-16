// Given an array nums. We define a running sum of an 
// array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


const runningSum = (numbers) => {
    let before = 0;
    let output = []
    for (let i = 0; i < numbers.length; i++){
        before += numbers[i]
        output.push(before)
    }
    return output
}

const nums1 = [1,2,3,4]
const nums2 = [2,3,4,5]
const nums3 = [1,1,1,1,1]

console.log(runningSum(nums1))


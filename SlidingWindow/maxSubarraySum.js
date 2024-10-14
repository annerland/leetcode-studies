// maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array.
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(numbers, num){
  let maxSum = 0;
  let tempSum = 0;
  
  if (numbers.length < num) return null;
  
  for (let i = 0; i < num; i++) {
      maxSum += numbers[i]
  };
  
  tempSum = maxSum;
  
  for (let i = num; i < numbers.length; i++) {
     tempSum = tempSum - numbers[i - num] + numbers[i];
     maxSum = Math.max(maxSum, tempSum);
  };
  
  return maxSum;
}

// minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(numbers, num) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let min = Infinity;
    
    while(right < numbers.length){
        sum += numbers[right];
        
        while (sum >= num) {
            min = Math.min(min, right - left + 1)
            sum -= numbers[left];
            left++;
        }
        
        right++;
    }
    
    return min === Infinity ? 0 : min;
}

// countUniqueValues
// Implement a function called countUniqueValues, which accepts a sorted array, 
// and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted.
// Time Complexity - O(n)
// Space Complexity - O(n)

function countUniqueValues(uniqueValues){
    // we need to implement a function that will return the amount of unique values in an array
    // the solution needs to be O(n) time, so we cannot use nasted loops
    // a solution that I can use for this problem could be multiple pointers
    // so basically we can compare each array position with left and right pointers
    // we could do from 2 pointers one aside of the other
    // if the right value is bigger than the left value
    // move left to the right and get the current value and move to the left position
    
    if (!uniqueValues || uniqueValues.length === 0) return 0;
    
    let left = 0;
    for (let right = 1; right < uniqueValues.length; right++) {
        if (uniqueValues[right] > uniqueValues[left]) {
          left++;
          uniqueValues[left] = uniqueValues[right];
        }
    }
    
    console.log(uniqueValues)
    
    return left+1;
}


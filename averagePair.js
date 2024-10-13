// averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals
// the target average. There may be more than one pair that matches the average target.
// Bonus Constraints:
// Time: O(N)
// Space: O(1)

function averagePair(numbers, target) {
    // I need to calculate an avarage of a sorted array
    // avarage = sum / 2
    
    if (numbers.length === 0) return false;
  
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
      let avarage = (numbers[left] + numbers[right] / 2);
      if (avarage === target) {
          return true;
      } else if (avarage < target) {
          left++;
      } else {
          right--;
      };
    }

  return false;
}

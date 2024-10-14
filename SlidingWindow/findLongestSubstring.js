// findLongestSubstring
// Write a function called findLongestSubstring,
// which accepts a string and returns the length
// of the longest substring with all distinct characters.
// Time Complexity - O(n)

function findLongestSubstring(str){
  const charSet = new Set();
  
  let left = 0;
  let right = 0;
  let maxLength = 0;
  
  while (right < str.length) {
      if(!charSet.has(str[right])) {
          charSet.add(str[right]);
          right++;
          maxLength = Math.max(maxLength, charSet.size)
          console.log(str, maxLength, right, "right")
      } else {
          charSet.delete(str[left])
          left++;
          console.log(str, left, "left")
      }
      
  }
  
  return maxLength
}

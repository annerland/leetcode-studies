// Write a function called isSubsequence which takes in two strings
// and checks whether the characters in the first string form a
// subsequence of the characters in the second string.
// In other words, the function should check whether the characters
// in the first string appear somewhere in the second string,
// without their order changing.

function isSubsequence(str1, str2) {
  // i need to identify the subsequence between 2 strings
  // i will be using the multiple pointers pattern
  let left = 0;
  let right = 0;

  while (right < str2.length) {
    if (str1[left] === str2[right]) {
        left++;
    };
    
    if (left === str1.length) {
        return true;
    }
    
    right++;
  }
  
  return false;
}

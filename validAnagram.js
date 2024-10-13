// ValidAnagram
// Given two strings, write a function to determine 
// if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by 
// rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(val1, val2) {
  // add whatever parameters you deem necessary - good luck!
  // I need to create a function that will receive two strings
  // I need to verify if they are anagrams
  // first I could create a dict for both strings
  // then I should loop both, to add a key from the current string looped
  // sum +1 to have record of how many times that string appears on our list
  // and I should do it for both
  // if both string are empty return true
  // then for the last, we should loop the first obj and then compare
  // if that specific key in first obj doesnt exist on the second, we return false
  // if the current key has a different value on the other object also return false
  // otherwise it would be always true

  if (!val1 && !val2) return true;
  let anagramObj1 = {};
  let anagramObj2 = {};

  for (let val of val1) {
    anagramObj1[val] = (anagramObj1[val] || 0) + 1;
  }

  for (let val of val2) {
    anagramObj2[val] = (anagramObj2[val] || 0) + 1;
  }

  for (let key in anagramObj1) {
    if (!(key in anagramObj2)) return false;
    if (anagramObj2[key] !== anagramObj1[key]) return false;
  }

  return true;
}

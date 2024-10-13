// sameFrequency
// Write a function called sameFrequency.
// Given two positive integers, find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities:
// Time: O(N)

function sameFrequency(num1, num2){
    let obj1 = {};
    let obj2 = {};
    
    for (let num of num1.toString()) {
        obj1[num] = (obj1[num] || 0) + 1;
    }
    
    for (let num of num2.toString()) {
        obj2[num] = (obj2[num] || 0) + 1;
    }
    
    for (let key of num1.toString()) {
        if (!(key in obj2)) return false;
        if (obj2[key] !== obj1[key]) return false;
    };
    
    
    return true;
}

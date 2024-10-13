// areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, 
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(elm, elm2, elm3, elm4) {
    let elements = [elm, elm2, elm3];
    if (elm4) elements.push(elm4)
    const obj1 = {};

    for (let value of elements) {
        obj1[value] = (obj1[value] || 0) + 1
    };
    
    for (let key in obj1) {
        if (obj1[key] > 1) return true;
    }
    
    return false;
}

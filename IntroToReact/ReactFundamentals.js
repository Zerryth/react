// Write a function called double which takes in an array of numbers and returns a new array after doubling every item in that array. double([1,2,3]) -> [2,4,6]
function double(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] *= 2;
    }
    return arr;
}

// console.log(double([1,2,3]));

// Write a function called add which takes in an array and returns the result of adding up every item in the array. add([1,2,3]) -> 6
function add(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];        
    }
    return sum;
}

// console.log(add([5, 7, 8]));

// Using jQuery (or vanilla JavaScript), add a click event handler to the element which has an id of btn. When clicked, toggle (add or remove) the highlight class as well as change the text to Add Highlight or Remove Highlight depending on the current state of the element.

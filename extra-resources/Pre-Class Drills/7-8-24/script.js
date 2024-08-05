// Write a function that takes in an input and returns true if it's an integer and false otherwise.

// Ex:
// Input: "7"
// Output: false

// Input: 7
// Output: true

// Input: 4.3
// Output: false

const isInt = function(input) {
    return Math.floor(input) === input;
}

console.log(isInt(3.14));
console.log(isInt(4));
console.log(isInt("foo"));
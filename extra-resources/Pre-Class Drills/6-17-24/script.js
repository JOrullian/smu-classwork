// Write a function that takes in an array of numbers and outputs the maximum number.

// Ex:
// Input: [ 1, 2, 3 ]
// Output: 3

// Input: [ 3, 6, 4, 5, 2, 1 ]
// Output: 6

// Input: [ 3, 3, 3 ]
// Output: 3

const numArray1 = [1, 2, 3]
const numArray2 = [3, 6, 4, 5, 2, 1]
const numArray3 = [3, 3, 3]

const displayHighestNumber1 = function(numArray1) {
    let maxNum = numArray1[0];
    for (let i = 0; i < numArray1.length; i++) {
        if (numArray1[i] > maxNum) {
            maxNum = numArray1[i];
        }
    }
    return maxNum;
};

const displayHighestNumber2 = function(numArray2) {
    let maxNum = numArray2[0];
    for (let i = 0; i < numArray2.length; i++) {
        if (numArray2[i] > maxNum) {
            maxNum = numArray2[i];
        }
    }
    return maxNum;
};

const displayHighestNumber3 = function(numArray3) {
    let maxNum = numArray3[0];
    for (let i = 0; i < numArray3.length; i++) {
        if (numArray3[i] > maxNum) {
            maxNum = numArray3[i];
        }
    }
    return maxNum;
};

console.log(displayHighestNumber1(numArray1));
console.log(displayHighestNumber2(numArray2));
console.log(displayHighestNumber3(numArray3));
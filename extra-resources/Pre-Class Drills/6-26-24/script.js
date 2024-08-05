// Write a function that takes in a string and outputs the first occurrence of a character that does not repeat itself in that string.

// 	Ex:
// 	Input: "the quick brown fox jumps over the calm kitten quietly"
// 	Output: "b"

// 	Input: "this hat is the greatest!"
// 	Output: "g"

// 	Input: "what a wonderful day it has been!"

// const firstChar = function(string) {
//     string.
//     for (let i = 0; i < string.length; i++) {
//         const char = string[i];

//         let count = 0;

//         for (let j = 0; j < string.length; j++) {
//             const element = string[j];
//             if (string[j] === char) {
//                 count++;
//             }
//         }

//         if (count === 1) {
//             return char
//         }
//     }
// }

// firstChar("the quick brown fox jumps over the calm kitten quietly");

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // Return null if no non-repeating character found
}

// Test cases
console.log(firstNonRepeatingCharacter("the quick brown fox jumps over the calm kitten quietly")); // Output: "b"
console.log(firstNonRepeatingCharacter("this hat is the greatest!")); // Output: "g"
console.log(firstNonRepeatingCharacter("what a wonderful day it has been!")); // Output: "o"
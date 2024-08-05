// Write a function that takes in a single word as a string and returns true if it's a palindrome and false otherwise (a palindrome is spelled the same way forwards and backwards).

// 	Ex:
// 	Input: "noon"
// 	Output: true

// 	Input: "horse"
// 	Output: false

// 	Input: "racecar"
// 	Output: true


const isPalindrome = function(string) {
    return string === string.split("").reverse().join("")

};

isPalindrome("");

console.log(isPalindrome("noon"));
console.log(isPalindrome("horse"));
console.log(isPalindrome("racecar"));


// const isPalindrome = function(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== str[str.length - (i + 1)]) {
//             return false;
//         }
//     }
//     return true;
// };
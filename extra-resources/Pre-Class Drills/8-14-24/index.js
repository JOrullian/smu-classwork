// Write a function that takes an array of numbers and returns an array with each number doubled. 

// Ex:
// Input: [1,2,3]
// Output: [2,4,6]

// Input: [-1,-2,-3]

const double = (arr) => {
    const newArr = [];

    for (let i = 0; i < arr.length; i++){
      const newNum = arr[i] * 2;
      newArr.push(newNum);
    }

    return newArr;
  }
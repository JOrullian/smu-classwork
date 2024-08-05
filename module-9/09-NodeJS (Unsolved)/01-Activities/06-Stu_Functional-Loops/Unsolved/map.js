const originalArray = [1, 3, 2, 5, 10];

// doubledArray is equal to a new array of numbers multiplied by 2 and returned by map(). map() will use an anonymous function as a condition. 
// The anonymous function returns each number multiplied by 2. The returned result is added to a new array.
const doubledArray = originalArray.map(data => data * 2);

console.log(doubledArray);
console.log(originalArray);


// TODO: Describe how map is working in the example below. What will the value of tripledArray be?
// tripledArray is taking the values from originalArray and multiplying each by 3 and returning new values.
const tripledArray = originalArray.map(data => data * 3);
console.log(tripledArray);

// TODO: Describe how map is working in the example below. What will the value of oddOrEven be?
// Taking the values from originalArray and determining if value is divisible by two and setting it to even, otherwise setting it to odd. Sets new array to strings of 'odd' or 'even' based on if its original number was odd or even.
const oddOrEven = originalArray.map(num => {
  if (num % 2 === 0) {
    return 'even'
  } else {
    return 'odd'
  }
});

console.log(oddOrEven);
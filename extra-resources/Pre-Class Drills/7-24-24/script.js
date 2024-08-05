// Write a function that takes in a number and returns the corresponding day of the week.

// Ex:
// Input: 1
// Output: 'Monday'

// Input: 5
// Output: 'Friday'

// Input: 8
// Output: undefined

const getDay = function(day) {
    switch (day) {
        case 'Monday':
            return '1';
        case 'Tuesday':
            return '2';
        case 'Wednesday':
            return '3';
        case 'Thursday':
            return '4';
        case 'Friday':
            return'5';
        case 'Saturday':
            return'6';
        case 'Sunday':
            return'7';
        default:
            return undefined;
    }
}
// Use Day.js to format the date and assign to the declared variable.

const date = dayjs();

// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

const gradDate = dayjs('2024-11-20').format('MMM D, YYYY');
$('#1a').text(gradDate)

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

const dayWeek = dayjs('2027-01-01').format('dddd');
$('#2a').text(dayWeek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds

const currentTime = dayjs().format('h:m:s');
$('#3a').text(currentTime);

// TODO: 4. What is the current Unix timestamp?

const unixTime = date.unix();
$('#4a').text(unixTime);

// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

const newDate = dayjs.unix('1318781876').format('MMM D, YYYY h:m:s')
$('#5a').text(newDate);

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

const date1 = dayjs('2027-03-04');
const difference = date1.diff(date, 'day');
$('#6a').text(difference);
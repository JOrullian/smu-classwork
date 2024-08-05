// TODO: What are we importing?
// This is the file system module that allows for interacting with files (comes from node.js)
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 'log.txt' is the name of the file that will receive the append, `${process.argv[2]}\n` is what will be added (along with a new line), and (err) is the callback function that will run after the append occurs.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // if there is err, the console will show error, else, the console will log 'Commit logged!'
  err ? console.error(err) : console.log('Commit logged!')
);

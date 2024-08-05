const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');

inquirer
  .prompt([
    {
        type: 'input',
        message: colors.brightMagenta('What is your name?'),
        name: 'name',
    },
    {
        type: 'checkbox',
        message: colors.brightMagenta('What languages do you know?'),
        name: 'languages',
        choices: ['English', 'Spanish', 'Haitian-Creole', 'Portuguese', 'Japanese', 'Chinese']
    },
    {
        type: 'list',
        message: colors.brightMagenta('What is your preferred method of communication?'),
        name: 'communication',
        choices: ['Call', 'Text', 'Email', 'Fax']
    }
  ])
    .then((answers) => {
        fs.appendFile('log.txt', JSON.stringify(answers, null, '\t'), (err) =>
            err ? console.error(err) : console.log('Success!')
          );    
        })
    .catch(err => console.error(err))
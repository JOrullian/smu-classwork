const inquirer = require('inquirer');
const colors = require('colors');

inquirer
    .prompt([
        {
        type: "input",
        name: "content",
        message: "What text would you like to log?",
        },
        {
        type: "list",
        name: "color",
        message: "What color would you like to use?",
        choices: ["red", "blue", "green", "yellow", "cyan", "magenta"],
        }
    ])
    .then((answers) => {
        console.log(colors[answers.color](answers.content))
    })
    .catch(err => console.log(colors.bgRed(err)))
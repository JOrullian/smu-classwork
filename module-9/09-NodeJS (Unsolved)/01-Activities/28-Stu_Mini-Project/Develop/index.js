let inquirer = require('inquirer');
let fs = require('fs');

const createSkeleton = ({ name, location, bio, LinkedInUrl, GithubUrl }) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body>
    <div id="name">${name}</div>
    <div id="location">${location}</div>
    <div id="bio">${bio}</div>
    <div id="LinkedIn"><a href="${GithubUrl}">Github</a></div>
    <div id="Github"><a href="${LinkedInUrl}">LinkedIn</a></div>
</body>
</html>`

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell a little about yourself:',
        },
        {
            type: 'input',
            name: 'LinkedInUrl',
            message: 'Include a link to your LinkedIn:',
        },
        {
            type: 'input',
            name: 'GithubUrl',
            message: 'Include a link to your Github:'
        }
    ])
    .then((answers) => {
        const htmlTemplate = createSkeleton(answers)
        fs.writeFile('index.html', htmlTemplate, (err) => {
            err ? console.error(err) : console.log('Generated HTML!')
        })
    })
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const promptReadme = () => {
    console.log(`
  =================
  Create a Readme
  =================
  `);


const questions = [
    {
        type: "input",
        name: 'title',
        message: 'What is your title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('What is your title of your project?');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'description',
        message: 'Enter your README Description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your README description.');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'tableofcontents',
        message: 'Enter your Table of Contents',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Table of Contents.');
                return false;
            }
        },
    },

    {
        type: "input",
        name: 'installation',
        message: 'Enter your Installation Description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Installation description.');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'usage',
        message: 'Enter your Usage',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Usage.');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'license',
        message: 'Enter your License Description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your License description.');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'contribute',
        message: 'Enter your Contributors',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Contributors.');
                return false;
            }
        },
    },
    {

        type: "input",
        name: 'test',
        message: 'Enter your Test Description',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Test description.');
                return false;
            }
        },
    },
    {

        type: "input",
        name: 'questions',
        message: 'Enter your Questions',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Questions.');
                return false;
            }
        },
    },
    
    {
        type: "input",
        name: 'githubusername',
        message: 'What is your GitHub Username?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('What is your GitHub Username?');
                return false;
            }
        },
    },
    {
        type: "input",
        name: 'email',
        message: 'What is your email address?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('What is your email address?');
                return false;
            }
        },
    },
]
inquirer.prompt(questions)
    .then((userInput) => {
        console.log(userInput)
        return writeToFile('./utils/README.md', generateMarkdown(userInput));
    })
// }
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {

            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your README has been Made'
            });
        });
    });
};

// TODO: Create a function to initialize app
promptReadme();


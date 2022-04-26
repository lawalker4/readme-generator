// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'Description',
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
        name: 'Table of Contents',
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
        name: 'Installation',
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
        name: 'Usage',
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
        name: 'License',
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
        name: 'Contributing',
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
        name: 'Test',
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
        name: 'Questions',
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
        name: 'github Username',
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (response) {

    })
}

// Function call to initialize app
init();


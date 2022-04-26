// TODO: Include packages needed for this application
const inquirer = require ('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: 'Description',
        message: 'Enter your README Description',
        validate: nameInput => {
            if (nameInput){
                return true;
            }else {
                console.log ('Enter your README description.');
                return false;
            }
        }
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){

    })
}

// Function call to initialize app
init();

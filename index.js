const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
{
    type: "input",
    name: "title",
    message: "What is your project title?"
},
{
    type: "input",
    name: "email",
    message: "Please enter your email address."
},
{
    type: "input",
    name: "github",
    message: "Please enter your GitHub username."
},
{
    type: "input",
    name: "description",
    message: "Please enter a description of your project."
},
{
    type: "input",
    name: "installation",
    message: "Please enter any installation instructions."
},
{
    type: "input",
    name: "usage",
    message: "Please enter any usage information."
},
{
    type: "input",
    name: "contributionGuidelines",
    message: "Please enter any contribution guidelines."
},
{
    type: "input",
    name: "test",
    message: "Please enter any test instructions."
},

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        console.log('ANSWERS OBJECT -> ', answers)
       const content = generateMarkdown(answers)
       fs.writeFile("README.md", content, err =>{
           if (err){
               console.error(err);
               return
           }
           console.log("Success");
       }

       )
    })
}

// Function call to initialize app
init();


//  application that accepts user input
//  - prompted for information about my application repository
//  - title of my project
// WHEN I enter my project title
// THEN this is displayed as the title of the README


        //- Description, 
        //-Table of Contents,
        // -  Installation, 
        // -Usage, 
        // - License, 
        // -Contributing, 
        // -Tests,
        // and Questions





// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests


// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
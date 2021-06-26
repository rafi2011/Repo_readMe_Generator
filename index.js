const questions = require("./utils/questions");
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs")


function main() {

    // ask questions
    inquirer.prompt(questions)
    .then(answers=>{
        console.log(answers)
    let template = generateMarkdown(answers)
        console.log(template)
    
    fs.writeFile("README.MD", template, err => {
        if (err) throw err
        console.log("File has been created")
    })
    
    })


//generate markdown from answers

// save files

}

// start entry point
main();

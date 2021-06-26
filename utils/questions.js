const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");


const questions = [
    {
        type: "input",
        name: "username",
        message: "what's your username ?",

    },

    {
        type: "input",
        name: "title",
        message: "What's the name of the project ?"
    },

    {
        type: "input",
        name: "projectDescription",
        message: " projectDescription?"
    },

    {
        type: "input",
        name: "usageInstruction",
        message: " usage instructtion?"
    },

    {
        type: "input",
        name: "TestInstructions",
        message: " TestInstructtions?"
    },

    {
        type: "input",
        name: "email",
        message: "email ?"
    },

    {
        type: "list",
        name: "License",
        message: " Which one is your license ?",
        choices: ["apache", "MIT", "BSD"]
    },






];
module.exports = questions

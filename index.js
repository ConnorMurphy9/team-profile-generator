const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const employees = [];

const initialQuestions = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the manager's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the manager's id?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the manager's email?",
      },
      {
        name: "officeNumber",
        type: "input",
        message: "What is the manager's office number?",
      },
    ])
    .then((data) => {
      const manager = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      employees.push(manager);
      console.log("Manager created.")
      setTimeout(prompts, 3000)
    });
};
const prompts = () => {
  inquirer
    .prompt([
      {
        name: "type",
        type: "list",
        message: "What kind of employee would you like to create?",
        choices: ["Engineer", "Intern", "I am finished."],
      },
    ])
    .then((data) => {
      switch (data.type) {
        case "Engineer":
          createEngineer();
          break;
        case "Intern":
          createIntern();
          break;
        default:
          generateHTML();
      }
    });
};

const createEngineer = () => {

}

const createIntern = () => {

}

const generateHTML = () => {
// for loop for each one of employees, create a card
}

initialQuestions();
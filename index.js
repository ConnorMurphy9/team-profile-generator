const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
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
      prompts();
      // setTimeout(prompts, 3000)
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
    
        const something = generateHTML(employees);
        writeToFile("index.html", something);  
    

      }
  
    });
};

const createEngineer = () => {
    inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the engineer's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is the engineer's ID number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the engineer's email?",
      },
      {
        name: "github",
        type: "input",
        message: "What is the engineer's github username?",
      },
    ])
    .then((data) => {
      let engineer = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employees.push(engineer);
      console.log("Engineer created.")
      prompts();
    }
    )}

const createIntern = () => {
  inquirer
  .prompt([
    {
      name: "name",
      type: "input",
      message: "What is the intern's name?",
    },
    {
      name: "id",
      type: "input",
      message: "What is the intern's ID number?",
    },
    {
      name: "email",
      type: "input",
      message: "What is the intern's email?",
    },
    {
      name: "school",
      type: "input",
      message: "What school did the intern attend?",
    },
  ])
  .then((data) => {
    let intern = new Intern(
      data.name,
      data.id,
      data.email,
      data.school
    );
    employees.push(intern);
    console.log("Intern created.")
 
    prompts();
  }
  )}

  function writeToFile(fileName, whatever) {
    fs.writeFile(fileName, whatever, (err) => err ? console.error(err) : console.log('Success!'))
    }




const generateHTML = (employees) => {
 return `<!DOCTYPE html>
 <html lang="en">
 
 <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1."/>
     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
     
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"/>
   
     <link rel="stylesheet" href="./assets/style.css" />
     <title>Team Profile Generator</title>
 </head>
 
 <body>
     <header>
         My Team
     </header>
 
     <div class="row">
        ${createEmployeeCards(employees)} 
        ${closeHTML()}`
}

// for loop for each one of employees, create a card

const createEmployeeCards = (employees) => {
    let someVar = "";
  for (let i = 0; i < employees.length; i++) {
    let newVar="";
    if (employees[i].getRole() == "Intern") {
    newVar = 
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${employees[i].name}
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${employees[i].getRole()}</h5>
        <p class="card-text">
        ID: ${employees[i].id}
        </p>

        <p>
        Email: <a href="mailto:${employees[i].email}">${employees[i].email}
        </a>
       </p>

        <p>
        School: ${employees[i].school}
        </p>
        
      </div>
  </div>`
    }
    else if (employees[i].getRole() == "Engineer") {
      newVar = 
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${employees[i].name}
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${employees[i].getRole()}</h5>
        <p class="card-text">
        ID: ${employees[i].id}
        </p>
     
        <p>
        Email: <a href="mailto:${employees[i].email}">${employees[i].email}</a>
        </p>
    
        <p>
        Github: <a href="mailto${employees[i].github}">${employees[i].github}
        </a>
        </p>
      </div>
  </div>`
    }
    else {
    newVar =
      `<div class="card" style="width: 18rem;">
      <div class="card-header">
        ${employees[i].name}
      </div>
      
      <div class="card-body">
        <h5 class="card-title">${employees[i].getRole()}</h5>
        <p class="card-text">
        ID: ${employees[i].id}
        </p>

        <p>
        Email: <a href="mailto:${employees[i].email}">${employees[i].email}
        </a>
        </p>
          <p>
        Office Number: ${employees[i].officeNumber}
        </p>
      </div>
  </div>`
    }
    someVar += newVar
}
return someVar;
}

const closeHTML = () => {
  return `</body>
          </html>`
}



initialQuestions();

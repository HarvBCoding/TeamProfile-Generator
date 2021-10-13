const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const employees = [];

// prompt for Engineer for name, id, email and github, once all questions are answered user should be taken back to the promptEmployees menu
const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the employee to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number for the employee you would like to add?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID number to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee you would like to add?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the name of the employee's GitHub profile?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's GitHub username to continue!");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const {name, id, email, github} = answers;
        const engineer = new Engineer(name, id, email, github);

        employees.push(engineer);

        promptEmployees()
    })
}
// prompt for Intern for name, id, email, and school, once all questions are answered user should be taken back to the promptEmployees menu
const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern you would like to add?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the employee to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID number of the employee you would like to add?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's ID number to continue!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the employee you would like to add?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email to continue!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school does this employee attend?',
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's school to continue!");
                    return false;
                }
            }
        }
    ]).then(answers => {
        const { name, id, email, school } = answers;

        const intern = new Intern(name, id, email, school);
        employees.push(intern);

        promptEmployees()
    })
}

const promptEmployees = () => {
    return inquirer.prompt(
        {
            type: 'list',
            name: 'employeeList',
            message: 'What would you like to do?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        }
    ).then( reply => {
        if (reply.employeeList === 'Add an engineer') {
            // call prompt for engineer
            promptEngineer();

        } else if (reply.employeeList === 'Add an intern') {
            // call prompt for intern
            promptIntern();
            
        } else {
            // user is done building their team and the employees array needs to be passed to the src folder to build the HTML
            console.log(employees);
        }
    })
}

const startPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID? (Required)',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter your employee ID to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is you email? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter you email address to continue!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number? (Required)',
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter your office number to continue!');
                    return false;
                }
            }
        }
    ]).then( answers => {

        const {name, id, email, office} = answers
        const manager = new Manager(name, id, email, office);

        employees.push(manager);

        promptEmployees()
        
    })
}

// function to write HTML file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(fileName, data)
// };

startPrompt();

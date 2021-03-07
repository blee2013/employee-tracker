const inquirer = require('inquirer');
const DB = require('./db');


const questions = [{
    type: 'list',
    name: 'whatToDo',
    message: 'What would you like to do?',
    choices: [
        {
            name: "View All Employees",
            value: "VIEW_EMPLOYEES"
        },
        {
            name: "Update An Employee",
            value: "UPDATE_EMPLOYEE"
        },
        {
            name: "Add an Employee",
            value: "ADD_EMPLOYEE"
        }
    ]
},
]


// ask the user what they want to do
function init() {
    // add, delete, update, view
        // employees, roles, departments
        //9+ questions

    inquirer.prompt(questions).then(userResponse => {
        //now we know what they want to do
        if (userResponse.whatToDo === 'VIEW_EMPLOYEES') {
            viewEmployees();
        }
        //continue the if elses or use a switch
    })

}

// now we know what user wants to do
// we focus on employees
// view employees
function viewEmployees() {
    console.log("View employee fx");
    // query the database and display the data
    // DB.findAllEmployees().then(employeeData => {
    //     console.table(employeeData);
    //     areYouFinished();
    // });


}
// add employee
    // we need to know 
        // name of new employee - first and last
        // role id
        // manager id


// delete employee
    // which employee to delete --- id

// update employee
    // which employee to update --- id
    // what data points to change

// areYouFinished function
function areYouFinished() {
    // ask the user if they want to to continue managing the employees
    inquirer.prompt([{
        type: 'confirm',
        name: 'quit',
        message: 'Would you like to continue?'
    }]).then(userResponse => {
        // restart the initial questions
        if (userResponse.quit) {
            init()
        } else {
            console.log('have a great day');
            process.exit()
        }
        // either exit the process

    })

}

init();
const inquirer = require('inquirer');
const { connection, addDepartment, addRole, updateEmployeeRole } = require('./db');
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
            name: "View All Roles",
            value: "VIEW_ROLES"
        }, {
            name: "View All Departments",
            value: "VIEW_DEPARTMENTS"
        },
        {
            name: "Add an Employee",
            value: "ADD_EMPLOYEE"
        },
        {
            name: "Add a Role",
            value: "ADD_ROLE"
        },
        {
            name: "Add a Department",
            value: "ADD_DEPARTMENT"
        },
        {
            name: "Update An Employee Role",
            value: "UPDATE_EMPLOYEE"
        }
    ]
},
]


// ask the user what they want to do
function init() {
    console.log (`
    ---------------------------------------------------------------------------------------                                                
     ________                          __                                              
    /        |                        /  |                                             
    *********/ _____  ____    _____   ** |  ______   __    __   ______    ______       
    ** |__    /     \/    \  /      \ ** | /      \ /  |  /  | /      \  /      \      
    **    |   *****  ***** |/ *****  |** |/******  |** |  ** |/******  |/******  |     
    *****/    ** | ** | ** |** |  ** |** |** |  ** |** |  ** |**    ** |**    ** |     
    ** |_____ ** | ** | ** |** |__** |** |** \__** |** \__** |********/ ********/      
    **       |** | ** | ** |**    **/ ** |**    **/ **    ** |**       |**       |     
    ********/ **/  **/  **/ ******    **/  ******/    ****** | *******/  *******/      
                            ** |                    /  \__** |                         
                            ** |                    **    **/                          
                            **/                      ******/                           
     __       __                                                                       
    /  \     /  |                                                                      
    **  \   /** |  ______   _______    ______    ______    ______    ______            
    ***  \ /*** | /      \ /       \  /      \  /      \  /      \  /      \           
    ****  /**** | ******  |*******  | ******  |/******  |/******  |/******  |          
    ** ** **/** | /    ** |** |  ** | /    ** |** |  ** |**    ** |** |  **/           
    ** |***/ ** |/******* |** |  ** |/******* |** \__** |********/ ** |                
    ** | */  ** |**    ** |** |  ** |**    ** |**    ** |**       |** |                
    **/      **/  *******/ **/   **/  *******/  ******* | *******/ **/                 
                                               /  \__** |                              
                                               **    **/                               
                                                ******/                                                                    
-----------------------------------------------------------------------------------------`)
    // add, delete, update, view
        // employees, roles, departments
        //9+ questions

    inquirer.prompt(questions).then(userResponse => {
        //now we know what they want to do
        if (userResponse.whatToDo === 'VIEW_EMPLOYEE') {
            viewEmployees();
        } else if (userResponse.whatToDo === 'VIEW_DEPARTMENT') {
            findAllDepartments();
        } else if (userResponse.whatToDo === 'VIEW_ROLE') {
            findAllRoles();
        } else if (userResponse.whatToDo === 'ADD_EMPLOYEE') {
            areYouFinished();
        } else if (userResponse.whatToDo === 'ADD_DEPARTMENT') {
            addDepartment();
        } else if (userResponse.whatToDo === 'ADD_ROLE') {
            addRole();
        } else if (userResponse.whatToDo === 'UPDATE_ROLE') {
           areYouFinished();
        } else if (userResponse.whatToDo === 'EXIT') {
           return areYouFinished();
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
function addEmployee(){
    console.log("View employee fx");

}
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
            connection.stop()
        }
        // either exit the process

    })

}

init();
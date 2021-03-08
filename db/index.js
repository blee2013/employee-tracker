const mysql = require('mysql2');
const conTable = require('console.table');


const connection = require('./connection');



class DB {
    constructor(connection){
        this.connection = connection
    }

    //find all employees
    viewAllEmployees() {
        let query = `SELECT * FROM employee`
        // we want promise based asyncness so we use the promise utility built in
        return this.connection.promise().query(query)
    }

    // // find all departments
    viewAllDepartments() {
        let query = `SELECT * FROM department`
        return this.connection.promise().query(query)
    }

    // //find all roles
    viewAllRoles() {
        let query= `SELECT * FROM role`
        return this.connection.promise().query(query)
    }


    // add new employees
    addEmployee(first_name, last_name, manager_id, role_id) {
        
        return this.connection.promise().query(
            `INSERT INTO employee
                (first_name, last_name, manager_id, role_id)
            VALUES
                ('${first_name}', ${last_name}', '${manager_id}', '${role_id}')
            `)
    }

    // // add new department
    addDepartment(name) {
        return this.connection.promise().query(
            `INSERT INTO department (name)
            VALUES 
            ('${name}')`
        )
    }

    // //add new role
    addRole(title, salary, department_id) {

        return this.connection.promise().query(
            `INSERTT INTO role (title, salary, department_id)
            VALUES 
            ('${title}', '${salary}', '${department_id}')`
        )
    }

    // //update employee role

    updateEmployeeRole(employee_id, new_role) {
        return this.connection.promise().query(
            `UPDATE employee SET role_id = ${new_role}
            WHERE id = ${employeee_id}
            `)
    }


};

module.exports = new DB(connection);
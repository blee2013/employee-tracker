const connection = require('./connection');

class DB {
    constructor(connection){
        this.connection = connection
    }

    //find all employees
    findAllEmployees() {
        let query = `SELECT * FROM employees`
        // we want promise based asyncness so we use the promise utility built in
        return this.connection.promise().query(query)
    }

    // add new employees

    // etc
}

module.exports = new DB(connection);
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //update password
    password: '',
    //update which database we are using
    database: 'employeetracker'
})

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
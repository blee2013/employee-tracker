const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    //update password
    password: 'Queenb2020!',
    //update which database we are using
})

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
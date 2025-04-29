const mysql = require('mysql');
const config = require('../server/environment/.env');

var connection = mysql.createPool({
    host: '192.168.1.173',
    user: 'root',

    password: config.DBpasswd,
    port: 3309,
    database: config.DBname,

    multipleStatements: true,
    dateStrings: true
});


connection.getConnection(function (err) {
    // console.log("Connected Error", err); // true
    if (err) {
        console.log("database nt connected");

    } else {

        console.log("Database Connected");
    }
});

connection.on('error', function (err) {
    console.error('Database error:', err);
    connection.destroy(); // destroy the connection to prevent it from being reused
});

module.exports = connection;


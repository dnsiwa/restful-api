var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'restful_db'
});

connection.connect(function(err) {
    if(err) throw err;
    console.log('Mysql Connected...');
});

module.exports = connection;
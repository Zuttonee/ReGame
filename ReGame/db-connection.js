xvar mysql = require('mysql');

//web name and database to link
var connection = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'game_review'
});

module.exports = connection;
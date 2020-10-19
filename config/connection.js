var mysql = require("mysql");

require("dotenv").config();
var my = require("./my.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: my.pass.word,
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID " + connection.threadId);
});

module.exports = connection;
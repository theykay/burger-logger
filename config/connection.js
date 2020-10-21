// done...
var mysql = require("mysql");

require("dotenv").config();
var my = require("./my.js");

var connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
    // connection = mysql.createConnection({
    //     host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    //     port: 3306,
    //     user: whlq420lpl2ezw3d,
    //     password: my.pass.jaw,
    //     database: j3g9eibktreaf5jk
    // })
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: my.pass.word,
        database: "burgers_db"
    });
};

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as ID " + connection.threadId);
});

module.exports = connection;
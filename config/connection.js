// Set up MySQL connection.
var mysql = require("mysql");
const colors = require("colors");


var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log(colors.america("connected as id " + connection.threadId));
});

// Export connection for our ORM to use.
module.exports = connection;

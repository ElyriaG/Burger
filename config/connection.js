// Set up MySQL connection.
var mysql = require("mysql");
const colors = require("colors");


var connection = mysql.createConnection({
  host: "u0zbt18wwjva9e0v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "aryjoziqlbxarbkv",
  password: "kabw1fh74n5cv6el",
  database: "vzf67h4h6rz1kffs"
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

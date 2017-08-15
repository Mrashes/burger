let mysql = require('mysql')
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.eventNames.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "Shaina2013Walker",
        database: "burgers_db"
    });
}

  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;
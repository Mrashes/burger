let mysql = require('mysql')
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.eventNames.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 	"gk90usy5ik2otcvi.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "xcze2zf9hlnbvj8t",
        password: "kusthcbyxz5e17ez",
        database: "burgers_db"
    });
}

  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;
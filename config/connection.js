let mysql = require('mysql')
var connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.eventNames.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 	"cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "q83axpkpdwj7g2ei",
        password: "fve72qedo7p9vedg",
        database: "burgers_db"
    });
}

  
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

module.exports = connection;
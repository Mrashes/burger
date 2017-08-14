let connection = require('./connection.js');

let orm ={
    selectAll: function(tableName, cb) {
        var query = connection.query(
            "select * from ??", [tableName],
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        )
    },

    insertOne: function(table, head, burgerName, cb) {
        var query = connection.query(
            "INSERT INTO ?? (??) VALUES (?)", [table, head, burgerName],
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        )
    },

    updateOne: function(table, head, burgerName, cb) {
        var query = connection.query(
            "UPDATE ?? SET ?? = TRUE WHERE burger_name = ?", [table, head, burgerName],
            function(err, res) {
                if (err) throw err;
                cb(res);
            }
        )
    }
}

module.exports = orm;
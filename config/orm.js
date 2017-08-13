let connection = require('./connection.js');

let orm ={
    selectAll: function(tableName) {
        var query = connection.query(
            "select * from ??", [tableName],
            function(err, res) {
                console.log(res)
            }
        )
    },

    insertOne: function(burgerName) {
        var query = connection.query(
            "INSERT INTO burgers (burger_name) VALUES (?)", [burgerName],
            function(err, res) {
                console.log(res)
            }
        )
    },

    updateOne: function(burgerName) {
        var query = connection.query(
            "UPDATE burgers SET devoured = TRUE WHERE burger_name = ?", [burgerName],
            function(err, res) {
                console.log(res)
            }
        )
    }
}

orm.updateOne("Bacon-Cheeseburger")
orm.selectAll('burgers')
let orm = require('../config/orm.js')

let burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cb(res);
        })
    },

    update: function(burgerName, cb) {
        orm.updateOne("burgers", "devoured", burgerName, function(res){
            cb(res);
        })
    },
}

module.exports = burger;
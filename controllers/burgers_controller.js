let express = require('express');

let router = express.Router();

let burger = require('../models/burger.js')

router.get("/", function(req, res){
    burger.all(function(data){
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject)
    })
})

router.post("/", function(req, res) {
    burger.insert(req.body.name, function() {
        res.redirect('/')
    })
})

router.put("/:name", function(req, res) {
    burger.update(req.params.name, function() {
        res.redirect('/')
    })
})

module.exports = router;
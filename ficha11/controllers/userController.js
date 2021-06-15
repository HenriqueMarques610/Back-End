const User = require('../sequelize').User
var jwt = require("jsonwebtoken");

exports.getUser = function (req, res, next) {
    User.findAll()
        .then(result => {
            res.json(result);
        })
}
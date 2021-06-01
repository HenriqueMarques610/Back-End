const User = require('../sequelize').User

exports.getUser = function (req, res, next) {
    User.findAll()
        .then(result => {
            res.json(result);
        })
}

exports.getTest = function (req, res, next) {
    res.send('TESTE')
}
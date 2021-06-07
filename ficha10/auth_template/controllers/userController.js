const User = require('../sequelize').User

exports.getUser = function (req, res, next) {
    User.findAll()
        .then(result => {
            res.json(result);
        })
}

exports.postUser = function (req, res, next) {
    var details=req.body
    User.create(details)
    .then(result=>{
        res.send({"Person Added with success.": result})
    }).catch(err => {
        console.error("User not added", err)
    })
}

exports.getTest = function (req, res, next) {
    res.send('TESTE')
}
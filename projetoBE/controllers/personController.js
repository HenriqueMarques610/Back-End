const Person = require('../sequelize').Person

exports.getPersons = function (req, res, next) {
    Person.findAll()
        .then(result => {
            res.send(result);
        })
}

exports.postPersons = function (req, res, next) {
    Person.create({ firstname: req.body.firstname, lastname: req.body.lastname, userName: req.body.userName, email: req.body.email, password: req.body.password, birthDate: req.body.birthDate })
        .then(result => {
            res.send({ "Person Added with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
}

exports.deletePersons = function (req, res, next) {
    if (req.query.users_ID == undefined) {
        res.send("User not found or doesn´t exist")
    }
    else {
        Person.destroy({
            where: { users_ID: req.query.users_ID }
        }).then(result => {
            res.send({ "Person Deleted with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
    }
}

exports.putPersons = function (req, res, next) {
    if (req.query.users_ID == undefined) {
        res.send("User not found or doesn´t exist")
    }
    else{
    var details = req.body
    Person.update(details,
        {
            where: { users_ID: req.params.users_ID }
        })
        .then(result => {
            res.send({ "Person Updated with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
    }
}
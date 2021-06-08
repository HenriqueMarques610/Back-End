const Person = require('../sequelize').Person

exports.getPersons = function (req, res, next) {
    Person.findAll()
        .then(result => {
            res.render('person', { title: 'Person', data: result });
        })
}

//COM BODY
exports.postPersons = function (req, res, next) {
    Person.create({ firstname: req.body.firstname, lastname: req.body.lastname, profession: req.body.profession, age: req.body.age })
        .then(result => {
            res.send({ "Person Added with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
}

//COM QUERY
exports.deletePersons = function (req, res, next) {
    Person.destroy({ where: { id: req.query.id } })
        .then(result => {
            res.send({ "Person Deleted with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
}

//COM PARAMETROS / FAZER IF SE TIVER NULL
exports.getPersons1 = function (req, res, next) {
    Person.findAll({
        where:{id:req.params.id}
    })
    .then(result=>{
        res.send({"Person: ":result})
    }).catch(err => {
        console.error("No user found", err)
    })
}

exports.putPersons = function (req, res, next) {
    var details=req.body
    Person.update(details,
        {
            where:{id:req.params.id}
        })
        .then(result => {
            res.send({ "Person Updated with success.": result })
        }).catch(err => {
            console.error("User not added", err)
        })
}
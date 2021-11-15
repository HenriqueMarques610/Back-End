const Category = require('../sequelize').Category

exports.getCategory = function (req, res, next) {
    Category.findAll()
        .then(result => {
            res.send(result);
        })
}

exports.getCategoryID = function (req, res, next) {
    Category.findAll({
        where: { category_ID: req.params.category_ID }
    })
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.error("No game found", err)
        })
}
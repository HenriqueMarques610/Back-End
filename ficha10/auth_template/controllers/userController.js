const User = require('../sequelize').User

exports.getUser = function (req, res, next) {
    User.findAll()
        .then(result => {
            res.render('person', { title: 'Person', data: result });
        })
}
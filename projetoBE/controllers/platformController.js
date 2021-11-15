const Platform = require('../sequelize').Platform

exports.getPlatform = function (req, res, next) {
    Platform.findAll()
        .then(result => {
            res.send(result);
        })
}

exports.getPlatformID = function (req, res, next) {
    Platform.findAll({
        where: { platform_ID: req.params.platform_ID }
    })
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.error("No game found", err)
        })
}

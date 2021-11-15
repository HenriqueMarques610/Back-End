const Game = require('../sequelize').Game

exports.getGame = function (req, res, next) {
    Game.findAll()
        .then(result => {
            res.send(result);
        })
}

exports.getGameID = function (req, res, next) {
    Game.findAll({
        where: { game_ID: req.params.game_ID }
    })
        .then(result => {
            res.send(result)
        }).catch(err => {
            console.error("No game found", err)
        })
}

exports.postGame = function (req, res, next) {
    Game.create({ gameName: req.body.gameName, pegi: req.body.pegi, preco: req.body.preco, stock: req.body.stock, minimum_Requirement: req.body.minimum_Requirement, recommended_Requirement: req.body.recommended_Requirement,description: req.body.description,releaseDate: req.body.releaseDate,image: req.body.image })
        .then(result => {
            res.send({ "Game Added with success.": result })
        }).catch(err => {
            console.error("Game not added", err)
        })
}

exports.deleteGame = function (req, res, next) {
        Game.destroy({
            where: { game_ID: req.params.game_ID }
        }).then(result => {
            res.send({ "Game Deleted with success.": result })
        }).catch(err => {
            console.error("Game not deleted", err)
        })
}

exports.putGame = function (req, res, next) {
    var details = req.body
    Game.update(details,
        {
            where: { game_ID: req.params.game_ID }
        })
        .then(result => {
            res.send({ "Game Updated with success.": result })
        }).catch(err => {
            console.error("Game not updated", err)
        })
}
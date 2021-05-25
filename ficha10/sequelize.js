const Sequelize = require('sequelize')
const PersonModel = require('./models/person')

const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const Person = PersonModel(sequelize, Sequelize)

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

module.exports = {
    Person
}
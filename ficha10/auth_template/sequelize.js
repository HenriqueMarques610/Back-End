// TODO Implement all the models and business logic using sequelize
const Sequelize = require('sequelize')
const UserModel = require('./models/user')

const sequelize = new Sequelize('ficha10', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const User = UserModel(sequelize, Sequelize)

sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables create!')
    })
module.exports = {
    User
}
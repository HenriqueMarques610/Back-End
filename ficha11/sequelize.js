const Sequelize = require('sequelize')
const PersonModel = require('./models/person')
var dotenv=require("dotenv")
dotenv.config();

const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, "", {
    dialect: 'mysql',
    host: process.env.DB_HOST,
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
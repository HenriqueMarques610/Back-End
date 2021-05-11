// Importar > Express
const { response, request } = require('express');
const express = require('express')
const mysql = require('mysql2')
const swaggerUi = require('swagger-ui-express')
const Sequelize = require('sequelize')
const swaggerDocument = require('./swagger.json')
const app = express();
const port = 3000;

//Funcoes middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
})
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

const Person = sequelize.define('person', {
    //atributes
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
}, {
    //options
})

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables create!')
    }).then(function () {
        return Person.findAll()
    }).then(function (person) {
        console.log(person);
    });

/* Person.bulkCreate([
    {firstname: 'Pedro',lastName:'Jardim',profession:'IT',age:62},
    {firstname: 'Manuel',lastName:'Matos',profession:'IT',age:12},
    {firstname: 'Maria',lastName:'Figueira',profession:'IT',age:32},
    {firstname: 'Ana',lastName:'Duarte',profession:'IT',age:82},
    {firstname: 'Luis',lastName:'Faria',profession:'IT',age:42}
]).then(function(){
    return Person.findAll()
}).then(function(person){
    console.log(person)
}) */

app.get('/person',(request,response)=>{
    Person.findAll().then(person=>{
        response.send(person)
    })
})

app.post('/person',(request,response)=>{
    Person.create({firstname: "Joaquim", lastName: "Fernandes"}).then(person=>{
        response.send(person)
    })
})

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
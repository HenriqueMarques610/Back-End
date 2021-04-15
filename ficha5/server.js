//Importar Express
const { json } = require('express');
const express = require('express')
const fs = require("fs");
const { get } = require('http');

//Funcao para ler um ficheiro com caminho passado como argumento de forma sincrona
function readFileSync(path) {
  var content = fs.readFileSync(path);
  return content;
}

function writeFileSync(path, data) {
  var content = fs.writeFileSync(path);
}

//InstanciarE Express
const app = express()
//Definir a porta do servidor http
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//Default get Endpoint
app.get('/', (req, res) => {
  res.send('Hello Postman!')
})

//List all persons endpoint
app.get('/users', (req, res) => {
  var persons = readFileSync("./persons.json")
  res.send(JSON.parse(persons))
})

app.post('/users', function (req, res) {
  var persons = JSON.parse(readFileSync("./persons.json"))
  var length = Object.keys(persons).length
  var id = ++length
  var age = persons.person2.age
  var newPerson = req.body
  newPerson.id = id
  persons["person" + id] = newPerson
  writeFileSync('./persons.json', JSON.stringify(persons))
  res.send(persons)
})

// app.delete('/users', function (request, response) {
//   var persons = JSON.parse(readFileSync('./persons.json'))
//   var id = request.body.id
//   var person = persons["person" + id]
//   if (person != undefined) {
//     delete persons["person" + id]
//     response.send(persons)
//     writeFileSync('./persons.json', JSON.stringify(persons))
//   }
//   else {
//     response.send("ID Inexistente")
//   }
// })

app.delete('/users/:id', function (request, response) {
  var persons = JSON.parse(readFileSync('./persons.json'))
  var id = request.params.id
  var person = persons["person" + id]
  if (person != undefined) {
    delete persons["person" + id]
    response.send(persons)
    writeFileSync('./persons.json', JSON.stringify(persons))
  }
  else {
    response.send("ID Inexistente")
  }
})

app.get('/users/:id',(request,response)=>{
  var persons = JSON.parse(readFileSync('./persons.json'))
  var id = request.params.id
  var person = persons["person" + id]
  if (person != undefined) {
    response.send(person)
  }
  else {
    response.send("ID Inexistente")
  }
})

app.put('/users/:id',(request,response)=>{
  var persons = JSON.parse(readFileSync('./persons.json'))
  var id = request.params.id
  var person=persons["person" + id]
  if (person != undefined) {
    persons["person" + id] = request.body
    persons["person" + id].id = id
    writeFileSync('./persons.json', JSON.stringify(persons))
    response.send(persons)
  }
  else {
    response.send("ID Inexistente")
  }
})

//Metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
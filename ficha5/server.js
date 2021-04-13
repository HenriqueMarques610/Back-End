//Importar Express
const express = require('express')
const fs = require("fs")

//Funcao para ler um ficheiro com caminho passado como argumento de forma sincrona
function readFileSync(path) {
  var content = fs.readFileSync(path);
  return content;
}

//InstanciarE Express
const app = express()
//Definir a porta do servidor http
const port = 3000

//Default get Endpoint
app.get('/', (req, res) => {
  res.send('Hello Postman!')
})

//List all persons endpoint
app.get('/users', (req, res) => {
  var persons=readFileSync("./persons.json")
  res.send(JSON.parse(persons))
})

//Metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
//Importar Express
const express = require('express')
const fs = require("fs")

//Funcao para ler um ficheiro com caminho passado como argumento de forma sincrona
function readFileSync() {
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

//Metodo que arranca o servidor http e fica à escuta
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// Importar > Express
const express = require('express')
const fs = require('fs');

// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Default get endpoint
app.get('/', (request, response) => {
    //var body= "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>";
    var file=fs.readFileSync("index.html")
      response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'Text/html'
      });
      response.end(file);
});

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);


  fs.open('log.txt', 'a', function (err, fd) {
    console.log("File was created " , fd);
  });
});
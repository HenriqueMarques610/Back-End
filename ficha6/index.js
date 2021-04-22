// Importar > Express
const { response } = require('express');
const express = require('express')
const fs = require('fs');
const { get } = require('http');

// Instanciar o express
const app = express()
// Definir a porta do servidor http
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//middleware function
app.use(function(request,response,next){
    fs.appendFileSync("./log.txt", request.path + ", " + request.method + ": " + new Date() + "\n")
    next()
})

// Default get endpoint
app.get('/', (request, response) => {
    //log(request, response);
    //var body= "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>";
    var file = fs.readFileSync("index.html", 'utf-8')
    var date = new Date()
    file = file.replace('{date}', date.toLocaleDateString())
    response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'Text/html'
    });
    response.end(file);
});

//@name: route parameter
app.get('/user/:name', (request, response) => {
    //log(request, response);
    var file = fs.readFileSync("index.html", 'utf-8')
    var name = request.params.name;
    var profession = request.params.profession;
    file = file.replace('{name}', name)
    file = file.replace('{profession}', profession)
    response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'Text/html'
    });
    response.end(file);
});

app.get("/log",(request,response)=>{
    var file = fs.readFileSync("log.txt", 'utf-8')
    response.writeHead(200, {
        'Content-Lenght': Buffer.byteLength(file),
        'Content-Type': 'Text/plain'
    });
    response.end(file);
})

app.get("/log.txt",(request,response)=>{
    response.download("./log.txt",function(err){
        if(err !=undefined){
            response.status(404)
            response.end("Ocorreu um erro ao ler o ficheiro. " + err.message)
        }
        else{
            //Encontrou o ficheiro com sucesso
        }
    })
})

app.get("/clear",(request,response)=>{
    fs.unlinkSync("./log.txt")
    response.send("File Deleted")
})

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);


    fs.open('log.txt', 'a', function (err, fd) {
        console.log("File was created ", fd);
    });
});
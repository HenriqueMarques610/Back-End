// Importar > Express
const { response } = require('express');
const express = require('express')
const mysql = require('mysql')
const swaggerDocument = require('./swagger.json')
const swaggerUi = require('swagger-ui-express')
const app = express();
const port = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ficha7'
});

app.get('/person', (req, res) => {

    dbConnection.query('SELECT * FROM persons', (error, results, fields) => {
        if (error) {
            return res.status(404).send(error.message);
        }
        res.send(results);
    });

});

app.post('/person', (req, res) => {
    var details = req.body;
    dbConnection.query('INSERT INTO persons SET ?', [details], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send(results.insertId.toString());
    });

});

app.delete('/person', (req, res) => {
    var id = req.body.id;
    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entries");
    });
});

app.delete('/person/:id', (req, res) => {
    var id = req.params.id;
    dbConnection.query('DELETE FROM persons WHERE id = ?', id, (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }
        res.send("Deleted " + results.affectedRows + " entry(s)");
    });
});

 app.put('/person/:id', (req, res) => {
    var id = req.params.id;
    var details = req.body;
    dbConnection.query('UPDATE persons SET ? WHERE id = ?', [details, id], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }

        if (results.length == 0) {
            res.status(404).send("ID not found!");
        } else {
            details = {
                id,
                ...details
            }
            res.send(details);
        }
    });
});

app.get('/person/:age/:profession', (req, res) => {
    var age = req.params.age;
    var profession = req.params.profession;
    dbConnection.query('SELECT * FROM persons WHERE age = ? AND profession = ?', [age, profession], (error, results, fields) => {
        if (error) {
            res.status(404).send(error.message);
        }

        if (results.length == 0) {
            res.status(404).send("Users not found!");
        } else {
            res.send(results);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
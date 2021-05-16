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

const sequelize = new Sequelize('projeto', 'root', '', {
    dialect: 'mysql'
})
sequelize.authenticate()
    .then(() => {
        console.log("Connection has been established")
    })
    .catch(err => {
        console.error("Unable to connect", err)
    })

const Product = sequelize.define('product', {
    //atributes
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    seller_id: {
        type: Sequelize.INTEGER,
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.DECIMAL,
    },
    url: {
        type: Sequelize.STRING,
    },
    views: {
        type: Sequelize.INTEGER,
    },
    images: {
        type: Sequelize.JSON,
    },
    comments: {
        type: Sequelize.JSON,
    },
    tags: {
        type: Sequelize.JSON,
    }
}, {
    //options
})

sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables create!')
    }).then(function () {
        return Product.findAll()
    }).then(function (product) {
        console.log(product);
    });

/* Product.bulkCreate([
    {seller_id: 1,title:'Computador',description:'Computador Gaming',price:1000,url:"www.worten.pt",views:178,images:"pc gaming",comments:"Muito Bom"},
    {seller_id: 2,title:'Rato',description:'Rato Wirelss',price:50,url:"www.worten.pt",views:121,images:"rato wireless",comments:"Bom"},
    {seller_id: 3,title:'Teclado',description:'Teclado Mecanico',price:104,url:"www.worten.pt",views:134,images:"teclado mecanico",comments:"Excelente"},
]).then(function(){
    return Product.findAll()
}).then(function(products){
    console.log(products)
}) */

//A - Certo
 app.get('/product',(request,response)=>{
     Product.findAll().then(product=>{
         response.send(product)
     })
})

//B - Certo
app.post('/product',(request,response)=>{
    Product.create({seller_id: 1,title:'SSD',description:'SSD 256 GB',price:132,url:"www.worten.pt",views:178,images:"ssd",comments:"Bom"}).then(product=>{
        response.send(product)
        console.log("ID: ", product.id)
    })
})

//C - Nao sei se ta certo
app.get('/product',(request,response)=>{
    Product.findOne(request.query.seller_id).then(product=>{
            response.send(product)
        }).catch(err => {
            console.error("No user found", err)
        })
})

//D - Nao sei se ta certo
app.put('/product/:views',(request,response)=>{
    Product.update({
        where:{views:request.params.views}
    }).catch(err => {
        console.error("Nothing found", err)
    })
        response.send()
        console.log("Views: ", product.views)
})

//E - Certo
app.get('/person/:tags',(request,response)=>{
    Product.findAll({
        where:{
            tags:request.params.tags
        }
    }).then(product=>{
        response.send(product)
    }).catch(err => {
        response.send("No tags found", err)
    })
})

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
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
    {seller_id: 1,title:'Computador',description:'Computador Gaming',price:1000,url:"www.worten.pt",views:178,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\pcgaming",comments:"Muito Bom",tags:"pc"},
    {seller_id: 2,title:'Rato',description:'Rato Wirelss',price:50,url:"www.worten.pt",views:121,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\ratowireless",comments:"Bom",tags:"rato"},
    {seller_id: 3,title:'Teclado',description:'Teclado Mecanico',price:104,url:"www.worten.pt",views:134,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\tecladomecanico",comments:"Excelente",tags:"teclado"},
]).then(function(){
    return Product.findAll()
}).then(function(product){
    console.log(product)
}) */

//A - Certo
app.get('/product',(request,response)=>{
     Product.findAll()
     .then(product=>{
        response.send({"All Products: ":product})
     })
})

//B - Certo
app.post('/product',(request,response)=>{
    Product.create({seller_id: 1,title:'HDD',description:'HDD 1 TB',price:111,url:"www.worten.pt",views:134,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\hdd",comments:"Bom",tags:"hdd"})
    .then(product=>{
        response.send({"Product Added with success.": product})
    })
})

//C - Certo
app.get('/seller/:seller_id/product',(request,response)=>{
    Product.findOne(request.query.seller_id)
    .then(product=>{
        response.send(product)
    }).catch(err => {
        console.error("No user found", err)
    })
})

//D - Certo
app.put('/product/:id/incrementViews',(request,response)=>{
    Product.findOne({
        where:{id:request.params.id}
    }).then(product=>{
        product.increment("views")
        product.reload()
        response.send({"Views ": product.views})
    }).catch(err => {
        console.error("Nothing found", err)
    })
        
})

//E - Certo
app.get('/product/:tags',(request,response)=>{
    Product.findAll({
        where:{
            tags:request.params.tags
        }
    }).then(product=>{
        response.send({"Product found with this tag: ": product})
    }).catch(err => {
        response.send("No tags found", err)
    })
})

// Método que arranca o servidor http e fica à escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
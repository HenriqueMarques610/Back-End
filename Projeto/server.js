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
    {seller_id: 1,title:'Computador',description:'Computador Gaming',price:1000,url:"www.worten.pt",views:178,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\pcgaming.png",comments:"Muito Bom",tags:"pc"},
    {seller_id: 2,title:'Rato',description:'Rato Wirelss',price:50,url:"www.worten.pt",views:121,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\ratowireless.png",comments:"Bom",tags:"rato"},
    {seller_id: 3,title:'Teclado',description:'Teclado Mecanico',price:104,url:"www.worten.pt",views:134,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\tecladomecanico.png",comments:"Excelente",tags:"teclado"},
]).then(function(){
    return Product.findAll()
}).then(function(product){
    console.log(product)
}) */

//A - http://localhost:3000/product
app.get('/product',(request,response)=>{
     Product.findAll()
     .then(product=>{
        response.send({"All Products: ":product})
     }).catch(err => {
        console.error("No products found", err)
    }) 
})

//B - http://localhost:3000/product
app.post('/product',(request,response)=>{
    
    Product.create({seller_id: 1,title:request.body.title,description:'HDD 1 TB',price:111,url:"www.worten.pt",views:134,images:"C:\\Users\\Turma A\\Pictures\\Saved Pictures\\hdd.png",comments:"Bom",tags:"hdd"})
    .then(product=>{
        response.send({"Product Added with success.": product})
    }).catch(err => {
        console.error("User not added", err)
    })
})

//C - http://localhost:3000/product/seller_id?seller_id=2
app.get('/product/seller_id',(request,response)=>{
    Product.findAll({
        where:{seller_id:request.query.seller_id}
    })
    .then(product=>{
        response.send({"Seller: ":product})
    }).catch(err => {
        console.error("No user found", err)
    })
})

//D - http://localhost:3000/product/1/incrementViews
app.put('/product/:id/incrementViews',(request,response)=>{
    Product.findOne({
        where:{id:request.params.id}
    }).then(product=>{
        product.increment("views")
        product.reload()
        response.send({"Updated Views ": product.views})
    }).catch(err => {
        console.error("Nothing found", err)
    })  
})



//E - http://localhost:3000/product/tags?tags=rato
app.get('/product/tags',(request,response)=>{
    if(request.query.tags){
    Product.findAll({
        where:{tags:request.query.tags}
    }).then(product=>{
        response.send({"Product found with this tag: ": product})
    }).catch(err => {
        response.send("No tags found", err)
    })
}
    else{
        Product.findAll()
        .then(product=>{
            response.send({"All Products: ":product})
     }).catch(err => {
        response.send("No products found", err)
    })
    }
})

// M??todo que arranca o servidor http e fica ?? escuto
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
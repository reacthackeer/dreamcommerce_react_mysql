const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDb = require('../config/connectDb');
const jsonMysql = require('json-mysql');

// application config start
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors({origin: '*'}))
// application config end

// connect with database start
const database = connectDb.connectDb;
const mainDb=  connectDb.mainDb;
// let person = {
//     name: 'sohidul ',
//     email: 'md@gmail.com',
//     phone: '01303501469',
//     amount: 2000
// }
let person = [
    'rahim', 'karim', 'jalil', 'khalil'
]
let json = JSON.stringify(person); 
    
let name = 'rahim\''

    
app.get('/',(req, res)=>{
    res.status(200).send('<h1>Hello world')
})

app.post('/add-single-product',(req, res)=>{
    const {specificationSql, detailsSql, overviewsSql, imagesSql, productSql} = req.body; 
    mainDb.query(productSql, (err, result)=>{
        if(!err){    
            if(result.affectedRows > 0){ 
                mainDb.query(imagesSql, (err, result)=>{
                    if(!err){    
                        if(result.affectedRows > 0){ 
                            mainDb.query(overviewsSql, (err, result)=>{
                                if(!err){    
                                    if(result.affectedRows > 0){ 
                                        mainDb.query(detailsSql, (errD, resultD)=>{
                                            if(!errD){     
                                                if(resultD.affectedRows > 0){ 
                                                    mainDb.query(specificationSql, (err, result)=>{
                                                        if(!err){    
                                                            if(result.affectedRows > 0){ 
                                                                res.status(200).send({message: 'successfully data submitted', status__code: 201})
                                                            }
                                                        }else{
                                                            console.log(err);
                                                        }
                                                    })
                                                }
                                            }else{
                                                console.log(errD);
                                            }
                                        })
                                    }
                                }else{
                                    console.log(err);
                                }
                            })
                        }
                    }else{
                        console.log(err);
                    }
                })
            }
        }else{
            console.log(err);
        }
    })
})

mainDb.query(`SELECT * FROM dearvayu__specification WHERE uid='73234574
'`, (err, result)=> {
    if(!err){
        console.log(result);
    }else{
        console.log(err.message);
    }
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, (err)=>{
    if(!err){
        console.log(`Server is running on PORT http://localhost:9000`);
    }
});

let sql = `UPDATE offers SET active="true" WHERE name="everyday__essentials"`;
mainDb.query(sql, (err, result)=>{
    if(!err){
        console.log(result);
    }else{
        console.log(err.message);
    }
})

// todo get and insert multiple offers by like search
// const productSql = `SELECT * from products WHERE visible__url LIKE '%gaming%mouse%' OR visible__url LIKE '%gaming%monitor%' OR visible__url LIKE '%gaming%keyboard%' OR visible__url LIKE '%gaming%headphone%' OR visible__url LIKE '%gaming%chair%' OR visible__url LIKE '%gaming%laptop%'`;
// mainDb.query(productSql,(err, result)=>{
//     if(!err){ 
//         if(result?.length > 0){
//             let sql = ides = [];
//             let collection = [];
//             let offers = ['everyday__essentials', 'name__4',  'gamer__world', 'name__5', 'trending__now',   'name__3',  'deal__of__the__day', 'name__1',  'just__arrived','name__2',];
//             result.forEach((info)=>{
//                 if(collection.indexOf(info.product__id) === -1){
//                     let name = offers[Math.floor(Math.random()*offers.length)];
//                     let productId = info.ID; 
//                     collection.push(info.product__id);
//                     let newProductInfo = dataConverterUtils.bufferDataConverter(info.infos);
//                     if(newProductInfo?.images[0] && newProductInfo?.images[0]?.indexOf('ryans') === -1){
//                         let img__src = newProductInfo?.images[0];
//                         let singleSql = `("${name}","${productId}","${img__src}")`;
//                         sql.push(singleSql);
//                     }else{
//                         let img__src = '/not-found.png';
//                         let singleSql = `("${name}","${productId}","${img__src}")`;
//                         sql.push(singleSql);
//                     }
//                 }
//             }) 
//             let insertSql = `INSERT INTO offers (name, product__id, img__src) VALUES ${sql.join(',')}`;
//             mainDb.query(insertSql, (err, result)=>{
//                 if(!err){
//                     console.log(result);
//                 }else{
//                     console.log(err.message);
//                 }
//             })
//         }
//     }else{
//         console.log(err.message);
//     }
// })



// let sql = `UPDATE offers SET active="true" WHERE name="just__arrived"`;
// mainDb.query(sql, (err, result)=>{
//     if(!err){
//         console.log(result);
//     }else{
//         console.log(err.message);
//     }
// })



const categoryArray = [
    {   
        img: '/category/gaming.png',
        link: '/categories/gaming',
        name: 'Gaming'
    },
    {   
        img: '/category/camera.png',
        link: '/categories/camera',
        name: 'Camera'
    },
    {   
        img: '/category/processors.png',
        link: '/categories/processor',
        name: 'Processor'
    },
    {   
        img: '/category/apple.png',
        link: '/categories/watches',
        name: 'Watches'
    },
    {   
        img: '/category/graphics.png',
        link: '/categories/graphics-card',
        name: 'Graphics Card'
    },
    {   
        img: '/category/laptop.png',
        link: '/categories/laptop',
        name: 'Laptop'
    },
    {   
        img: '/category/headphone.png',
        link: '/categories/headphone',
        name: 'Headphone'
    },
    {   
        img: '/category/keyboard.png',
        link: '/categories/keyboard',
        name: 'Keyboard'
    },
    {   
        img: '/category/monitor.png',
        link: '/categories/monitor',
        name: 'Monitor'
    },
    {   
        img: '/category/mouse.png',
        link: '/categories/mouse',
        name: 'Mouse'
    },
    {   
        img: '/category/printer.png',
        link: '/categories/printer',
        name: 'Printer'
    },
]

// let infosArray = [];
// categoryArray.forEach((info) => {
//     infosArray.push(`('${info.name}','${info.link}','${info.img}')`)
// }) 

// let sql = `INSERT INTO shop__by__category (name, link, img) VALUES ${infosArray.join(',')}`;
// mainDb.query(sql, (err, result) => {
//     if(!err){
//         console.log(result);
//     }else{
//         console.log(err.message);
//     }
// })
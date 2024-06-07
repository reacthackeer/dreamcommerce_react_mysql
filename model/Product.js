
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('product',{
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product__id: DataTypes.STRING, 
    brand: DataTypes.STRING ,
    title: DataTypes.STRING ,
    collection: DataTypes.STRING, //child
    category: DataTypes.STRING, // parent
    topCategory: DataTypes.STRING,  // parent__father
    section: DataTypes.STRING,  // up
    visible__url:  DataTypes.STRING, 
    visible:  DataTypes.STRING,  
    total__sell:  DataTypes.INTEGER, 
    current__price: DataTypes.DECIMAL(20,4),
    previous__price: DataTypes.DECIMAL(20,4),
    wholesale__price: DataTypes.DECIMAL(20,4),
    quantity: DataTypes.INTEGER,  
    views: DataTypes.INTEGER,  
    images: DataTypes.JSON,  
    overviews: DataTypes.JSON,  
    details: DataTypes.JSON,  
    specifications: DataTypes.JSON,  
    infos: DataTypes.JSON,  
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Product;
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');   

const ShopByBrand = sequelize.define('shopByBrand',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    img__src: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = ShopByBrand;
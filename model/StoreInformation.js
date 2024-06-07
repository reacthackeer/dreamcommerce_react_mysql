const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');   

const StoreInformation = sequelize.define('storeInformation',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    store__name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    store__id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    store__email: {
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

module.exports = StoreInformation;
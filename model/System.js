
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');  
const System = sequelize.define('system',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    everyOrderShippingFee: {
        type: DataTypes.INTEGER, 
        allowNull: true,
        defaultValue: 100
    },
    everyProductShippingFee: {
        type: DataTypes.INTEGER, 
        allowNull: true,
        defaultValue: 100
    },
    vatPercent: {
        type: DataTypes.DECIMAL(20,4), 
        allowNull: true, 
    },
    taxPercent: {
        type: DataTypes.DECIMAL(20,4), 
        allowNull: true, 
    },
    allProductShippingFeeInOn: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'false'
    },
    onlinePayment: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'true'
    },
    cashOnDelivery: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'false'
    }
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = System;
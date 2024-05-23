
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database'); 

const PaymentStatus = sequelize.define('paymentStatus',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    user__id: DataTypes.STRING,
    status: DataTypes.STRING,
    wallet: DataTypes.STRING,
    order__id: DataTypes.STRING,
    products__ides: DataTypes.JSON,
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = PaymentStatus;
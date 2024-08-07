
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');  

const Order = sequelize.define('order',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product__id:  DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    user__id: DataTypes.STRING,
    phone: DataTypes.STRING,
    payment: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Incomplete'
    },
    pay__type: DataTypes.STRING,
    order__id: DataTypes.STRING,
    status: DataTypes.STRING,
    price: DataTypes.DECIMAL(20,4),
    id_order__id: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,
    },
    reason: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'Empty'
    }
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Order;
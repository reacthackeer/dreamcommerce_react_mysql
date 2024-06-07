const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');   

const ContactUs = sequelize.define('contactUs',{
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
    address: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    website: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    facebook: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    instagram: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    twitter: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    linkedin: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
    youtube: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }, 
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
}); 

module.exports = ContactUs;
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');   

const PopularCategory = sequelize.define('popularCategory',{
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
    }
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = PopularCategory;
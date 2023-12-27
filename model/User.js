// const {DataTypes, STRING} = require('sequelize');
// const sequelize = require('../config/database');  

// const User = sequelize.define('user',{
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:  DataTypes.STRING,
//     email:  {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     phone: {
//         type: DataTypes.STRING,
//         unique: true,
//     },
//     password: DataTypes.STRING,
//     user__id: {
//         type: DataTypes.STRING,
//         unique: true
//     },
//     img__src: DataTypes.STRING,
//     role: DataTypes.INTEGER,
//     designation: DataTypes.STRING,
//     address: DataTypes.JSON
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = User;
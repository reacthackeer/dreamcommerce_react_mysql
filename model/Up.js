// // name, uid, src


// const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');   

// const Up = sequelize.define('up',{
//     ID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name: {
//         type: STRING,
//         allowNull: false,
//         unique: true
//     },
//     uid: DataTypes.STRING,
//     src: DataTypes.STRING
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = Up;
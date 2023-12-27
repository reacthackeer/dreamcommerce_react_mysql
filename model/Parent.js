
// const {DataTypes, STRING} = require('sequelize');
// const sequelize = require('../config/database');  

// const Parent = sequelize.define('parent',{
//     ID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:  DataTypes.STRING,
//     parent__father:  DataTypes.STRING,
//     uid: DataTypes.STRING,
//     src: DataTypes.STRING,
//     up: DataTypes.STRING,
//     name_parent__father_up: {
//         type: STRING,
//         allowNull: false,
//         unique: true
//     }
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = Parent;
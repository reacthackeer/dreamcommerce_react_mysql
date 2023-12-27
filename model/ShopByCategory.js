// // name, link, img

// const {DataTypes} = require('sequelize');
// const sequelize = require('../config/database');   

// const ShopByCategory = sequelize.define('shopByCategory',{
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
//     link: DataTypes.STRING,
//     img: DataTypes.STRING
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = ShopByCategory;
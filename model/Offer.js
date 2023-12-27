// // name, product__id, img__src, active


// const {DataTypes, STRING} = require('sequelize');
// const sequelize = require('../config/database');   

// const Offer = sequelize.define('offer',{
//     ID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     name:  {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     }, 
//     product__id: DataTypes.STRING,
//     img__src: DataTypes.STRING,
//     active: DataTypes.STRING
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = Offer;
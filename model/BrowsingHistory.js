// // user__id, product__id 


// const {DataTypes, STRING} = require('sequelize');
// const sequelize = require('../config/database');   

// const Offer = sequelize.define('offer',{
//     ID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     user_id:  {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     }, 
//     product__id: DataTypes.STRING, 
//     user__id_product__id: {
//         type: DataTypes.STRING,
//         unique: true
//     }
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = Offer;
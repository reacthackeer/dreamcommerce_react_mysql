// // name, product__id, img__src, active


// const {DataTypes, STRING} = require('sequelize');
// const sequelize = require('../config/database');   
// // child, parent, parent__father, data
// const FilterNavbar = sequelize.define('filterNavbar',{
//     ID: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     child: DataTypes.STRING,
//     parent: DataTypes.STRING,
//     parent__father: DataTypes.STRING,
//     data: DataTypes.JSON,
//     child_parent_parent__father: {
//         type: DataTypes.STRING,
//         unique: true
//     }
// },{
//     timestamps: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at'
// });

// module.exports = FilterNavbar;
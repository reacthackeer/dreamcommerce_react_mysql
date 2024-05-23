
const {DataTypes} = require('sequelize');
const sequelize = require('../config/database'); 
// let {type, title, link, img__src,store__id, visible} = postData;
const Banner = sequelize.define('banner',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },  
    type: DataTypes.STRING, 
    title: DataTypes.STRING, 
    link: DataTypes.STRING, 
    img__src: DataTypes.STRING, 
    store__id: DataTypes.STRING, 
    visible: DataTypes.STRING, 
},{
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

module.exports = Banner;
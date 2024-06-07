const { getallShopByCategory, getSingleShopByCategory, addSingleShopByCategory, updateSingleShopByCategory, deleteSingleShopByCategory } = require('../Controller/shopByCategoryController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');


const shopByCategoryRouter = require('express').Router(); 
shopByCategoryRouter.get('/', getallShopByCategory);
shopByCategoryRouter.get('/:id', getSingleShopByCategory);
shopByCategoryRouter.post('/',  authenticateTokenModerator,  addSingleShopByCategory);
shopByCategoryRouter.put('/:id',  authenticateTokenModerator,  updateSingleShopByCategory);
shopByCategoryRouter.delete('/:id',  authenticateTokenModerator,  deleteSingleShopByCategory);

module.exports = {
    shopByCategoryRouter
}
const { getSingleShopByBrand, addSingleShopByBrand, updateSingleShopByBrand, deleteSingleShopByBrand, getallShopByBrand } = require('../Controller/shopByBrandController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const shopByBrandRouter = require('express').Router(); 
shopByBrandRouter.get('/', getallShopByBrand);
shopByBrandRouter.get('/:id', getSingleShopByBrand);
shopByBrandRouter.post('/', authenticateTokenModerator,  addSingleShopByBrand);
shopByBrandRouter.put('/:id', authenticateTokenModerator,  updateSingleShopByBrand);
shopByBrandRouter.delete('/:id', authenticateTokenModerator,  deleteSingleShopByBrand);

module.exports = {
    shopByBrandRouter
}
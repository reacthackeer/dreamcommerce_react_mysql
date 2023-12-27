const { getAllShopByCategory, getSingleShopByCategory, addSingleShopByCategory, updateSingleShopByCategory, deleteSingleShopByCategory } = require('../Controller/shopByCategoryController');

const shopByCategoryRouter = require('express').Router(); 
shopByCategoryRouter.get('/', getAllShopByCategory);
shopByCategoryRouter.get('/:item__id', getSingleShopByCategory);
shopByCategoryRouter.post('/', addSingleShopByCategory);
shopByCategoryRouter.put('/:item__id', updateSingleShopByCategory);
shopByCategoryRouter.delete('/:item__id', deleteSingleShopByCategory);

module.exports = {
    shopByCategoryRouter
}
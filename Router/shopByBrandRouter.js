const { getAllShopByBrand, getSingleShopByBrand, addSingleShopByBrand, updateSingleShopByBrand, deleteSingleShopByBrand } = require('../Controller/shopByBrandController');

const shopByBrandRouter = require('express').Router(); 
shopByBrandRouter.get('/', getAllShopByBrand);
shopByBrandRouter.get('/:item__id', getSingleShopByBrand);
shopByBrandRouter.post('/', addSingleShopByBrand);
shopByBrandRouter.put('/:item__id', updateSingleShopByBrand);
shopByBrandRouter.delete('/:item__id', deleteSingleShopByBrand);

module.exports = {
    shopByBrandRouter
}
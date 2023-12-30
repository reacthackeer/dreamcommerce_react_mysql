const { 
    handleGetAllSearchProduct, 
    handleGetAllSingleBrandProduct, 
    handleGetSingleChildProduct, 
    handleGetSingleParentProduct, 
    handleGetSingleFatherProduct, 
    handleGetSingleProductById,
    handleGetSingleChildSimilarProductProduct,
    handleGetAllSingleBrandSimilarProduct,
    handleGetSingleProductByJustId,
    handleAddNewProduct,
    handleEditSingleProduct,
    handleGetAllProduct
} = require('../Controller/ProductsController');

const productRouter = require('express').Router();

productRouter.post('/', handleAddNewProduct)
productRouter.get('/search/:search_string', handleGetAllSearchProduct);

productRouter.get('/getAllProduct', handleGetAllProduct);
productRouter.put('/:ID', handleEditSingleProduct)
productRouter.get('/p/:parent__father', handleGetSingleFatherProduct); 
productRouter.get('/brands/:brand', handleGetAllSingleBrandProduct); 
productRouter.get('/brands/:brand/:product__id', handleGetAllSingleBrandSimilarProduct); 
productRouter.get('/:visible__url/:product__id', handleGetSingleProductById);
productRouter.get('/:product__id', handleGetSingleProductByJustId);
productRouter.get('/p/:parent__father/:parent/:child', handleGetSingleChildProduct); 
productRouter.get('/p/similar__product/:parent__father/:parent/:child/:product__id', handleGetSingleChildSimilarProductProduct); 
productRouter.get('/p/:parent__father/:parent', handleGetSingleParentProduct); 


module.exports = {
    productRouter
};
const { 
    handleGetAllSingleUserCartProduct, 
    handleGetSingleCartProduct, 
    handleAddSingleCartProduct, 
    handleUpdateSingleCartProduct,
    handleDeleteSingleCartProduct,
    handleTransferToWishlist,
    handleGetAllSingleUserCartProductAdPdfFormat, 
} = require('../Controller/CartController');
const { authenticateToken } = require('../utils/jsonwebtoken');


const cartRouter = require('express').Router();
cartRouter.get('/get-all/:user__id', handleGetAllSingleUserCartProduct);
cartRouter.get('/transfer-to-wishlist/:wishlist__id', handleTransferToWishlist) 
cartRouter.get('/:item__id', handleGetSingleCartProduct);
cartRouter.post('/get-all/product-as-a-pdf-format/:user__id', authenticateToken,  handleGetAllSingleUserCartProductAdPdfFormat);
cartRouter.put('/:item__id', handleUpdateSingleCartProduct);
cartRouter.delete('/:item__id', handleDeleteSingleCartProduct);
cartRouter.post('/', handleAddSingleCartProduct);


module.exports = {
    cartRouter
}
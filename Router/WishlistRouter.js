 
const { 
    handleGetAllSingleUserWishlistProduct, 
    handleGetSingleWishlistProduct, 
    handleAddSingleWishlistProduct, 
    handleUpdateSingleWishlistProduct,
    handleDeleteSingleWishlistProduct,
    handleTransferToCart,
    handleGetAllSingleUserCartProductAdPdfFormat
} = require('../Controller/WishlistController');

    

const wishlistRouter = require('express').Router();
wishlistRouter.get('/transfer-to-cart/:wishlist__id', handleTransferToCart)
wishlistRouter.post('/get-all/product-as-a-pdf-format/:user__id', handleGetAllSingleUserCartProductAdPdfFormat);
wishlistRouter.get('/get-all/:user__id', handleGetAllSingleUserWishlistProduct);
wishlistRouter.put('/:item__id', handleUpdateSingleWishlistProduct);
wishlistRouter.get('/:item__id', handleGetSingleWishlistProduct);
wishlistRouter.delete('/:item__id', handleDeleteSingleWishlistProduct);
wishlistRouter.post('/', handleAddSingleWishlistProduct);

module.exports = {
    wishlistRouter
}
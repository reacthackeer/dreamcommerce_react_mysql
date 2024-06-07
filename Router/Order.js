const { handleApplyForCashOnDelivery, handleGetAllUserOrderProduct, handleIncrementOrderProduct, handleDecrementOrderProduct, handleUpdateProductOrderStatus, handleGetAllAdminOrderProduct, handleGetAllSingleUserCartProductAdPdfFormat } = require('../Controller/OrderController');
const { authenticateTokenUser, authenticateTokenModerator } = require('../utils/jsonwebtoken');

const orderRouter = require('express').Router();

orderRouter.put('/apply-for-cash-on-delivery', authenticateTokenUser, handleApplyForCashOnDelivery)
orderRouter.get('/all', authenticateTokenModerator, handleGetAllAdminOrderProduct)
orderRouter.get('/:user__id', authenticateTokenUser, handleGetAllUserOrderProduct)
orderRouter.put('/increment/:id', authenticateTokenUser, handleIncrementOrderProduct);
orderRouter.put('/decrement/:id', authenticateTokenUser, handleDecrementOrderProduct);
orderRouter.put('/status/:id/:status', authenticateTokenUser, handleUpdateProductOrderStatus);
orderRouter.post('/print/info-and-product/:user__id/:status', authenticateTokenModerator, handleGetAllSingleUserCartProductAdPdfFormat);

module.exports = {
    orderRouter
}
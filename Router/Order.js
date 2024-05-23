const { handleApplyForCashOnDelivery, handleGetAllUserOrderProduct, handleIncrementOrderProduct, handleDecrementOrderProduct, handleUpdateProductOrderStatus, handleGetAllAdminOrderProduct, handleGetAllSingleUserCartProductAdPdfFormat } = require('../Controller/OrderController');

const orderRouter = require('express').Router();

orderRouter.put('/apply-for-cash-on-delivery', handleApplyForCashOnDelivery)
orderRouter.get('/all', handleGetAllAdminOrderProduct)
orderRouter.get('/:user__id', handleGetAllUserOrderProduct)
orderRouter.put('/increment/:id', handleIncrementOrderProduct);
orderRouter.put('/decrement/:id', handleDecrementOrderProduct);
orderRouter.put('/status/:id/:status', handleUpdateProductOrderStatus);
orderRouter.post('/print/info-and-product/:user__id/:status', handleGetAllSingleUserCartProductAdPdfFormat);

module.exports = {
    orderRouter
}
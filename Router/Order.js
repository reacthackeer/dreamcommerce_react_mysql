const { handleApplyForCashOnDelivery, handleGetAllUserOrderProduct, handleIncrementOrderProduct, handleDecrementOrderProduct } = require('../Controller/OrderController');

const orderRouter = require('express').Router();

orderRouter.put('/apply-for-cash-on-delivery', handleApplyForCashOnDelivery)
orderRouter.get('/:user__id', handleGetAllUserOrderProduct)
orderRouter.put('/increment/:id', handleIncrementOrderProduct)
orderRouter.put('/decrement/:id', handleDecrementOrderProduct)

module.exports = {
    orderRouter
}
const { handleInitiatePayment, handleVerifyPayment, handleSuccessPayment } = require('../Controller/paymentController');

const paymentRouter = require('express').Router();

paymentRouter.post('/init', handleInitiatePayment);
paymentRouter.get('/verify/:orderId', handleVerifyPayment);
paymentRouter.post('/success/:orderId/:userId', handleSuccessPayment);


module.exports = {
    paymentRouter
}
const { handleInitiatePayment, handleVerifyPayment, handleSuccessPayment } = require('../Controller/paymentController');
const { authenticateTokenUser } = require('../utils/jsonwebtoken');

const paymentRouter = require('express').Router();

paymentRouter.post('/init', authenticateTokenUser, handleInitiatePayment);
paymentRouter.get('/verify/:orderId', handleVerifyPayment);
paymentRouter.post('/success/:orderId/:userId', handleSuccessPayment);


module.exports = {
    paymentRouter
}
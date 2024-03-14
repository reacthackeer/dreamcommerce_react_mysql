const { handleInitiatePayment } = require('../Controller/paymentController');

const paymentRouter = require('express').Router();

paymentRouter.post('/init', handleInitiatePayment);


module.exports = {
    paymentRouter
}
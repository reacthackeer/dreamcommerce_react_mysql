
const newProductRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const handleAddMultipleProduct = expressAsyncHandler(async(req, res, next) => {
    let products = req.body;

    res.json(products)
})


newProductRouter.post('/multiple', authenticateTokenModerator,  handleAddMultipleProduct)
module.exports = {
    newProductRouter
}
const { handleCalculatePrice } = require('../Controller/CalculatePrice');

const calculatePriceRouter = require('express').Router();

calculatePriceRouter.get('/:userId', handleCalculatePrice);

module.exports = {
    calculatePriceRouter
}

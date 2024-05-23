const { handleAddSingleSystem, handleGetSinglePriceCalculator, handleGetSingleSystemInformation} = require('../Controller/SystemController');

const systemRouter = require('express').Router();

systemRouter.post('/', handleAddSingleSystem); 
systemRouter.get('/',handleGetSingleSystemInformation);
systemRouter.get('/:userId', handleGetSinglePriceCalculator); 

module.exports = {
    systemRouter
}

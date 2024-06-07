const { handleAddSingleSystem, handleGetSinglePriceCalculator, handleGetSingleSystemInformation} = require('../Controller/SystemController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const systemRouter = require('express').Router();

systemRouter.post('/', authenticateTokenModerator, handleAddSingleSystem); 
systemRouter.get('/',handleGetSingleSystemInformation);
systemRouter.get('/:userId', handleGetSinglePriceCalculator); 

module.exports = {
    systemRouter
}

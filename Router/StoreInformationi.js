const { handleAddSingleStoreInformation, handleGetSingleStoreInformation } = require('../Controller/StoreInformation'); 
const { authenticateTokenAdmin } = require('../utils/jsonwebtoken');

const storeInformationRouter = require('express').Router();

storeInformationRouter.post('/', authenticateTokenAdmin, handleAddSingleStoreInformation); 
storeInformationRouter.get('/', handleGetSingleStoreInformation); 

module.exports = {
    storeInformationRouter
}

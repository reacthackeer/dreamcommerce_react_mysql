
const { 
    handleGetAllSingleUserBrowsingProduct, 
    handleUpdateSingleBrowsingProduct, 
    handleGetSingleBrowsingProduct, 
    handleDeleteSingleBrowsingProduct,
    handleAddSingleBrowsingProduct 
} = require('../Controller/browsingHistoryController');
const { authenticateTokenUser } = require('../utils/jsonwebtoken');

    

const browsingHistoryRouter = require('express').Router();

browsingHistoryRouter.get('/get-all/:user__id', handleGetAllSingleUserBrowsingProduct);
browsingHistoryRouter.put('/:item__id', authenticateTokenUser, handleUpdateSingleBrowsingProduct);
browsingHistoryRouter.get('/:item__id', handleGetSingleBrowsingProduct);
browsingHistoryRouter.delete('/:item__id', authenticateTokenUser, handleDeleteSingleBrowsingProduct);
browsingHistoryRouter.post('/', handleAddSingleBrowsingProduct);

module.exports = {
    browsingHistoryRouter
}
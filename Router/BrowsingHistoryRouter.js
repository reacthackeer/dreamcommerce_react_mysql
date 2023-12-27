
const { 
    handleGetAllSingleUserBrowsingProduct, 
    handleUpdateSingleBrowsingProduct, 
    handleGetSingleBrowsingProduct, 
    handleDeleteSingleBrowsingProduct,
    handleAddSingleBrowsingProduct 
} = require('../Controller/browsingHistoryController');

    

const browsingHistoryRouter = require('express').Router();

browsingHistoryRouter.get('/get-all/:user__id', handleGetAllSingleUserBrowsingProduct);
browsingHistoryRouter.put('/:item__id', handleUpdateSingleBrowsingProduct);
browsingHistoryRouter.get('/:item__id', handleGetSingleBrowsingProduct);
browsingHistoryRouter.delete('/:item__id', handleDeleteSingleBrowsingProduct);
browsingHistoryRouter.post('/', handleAddSingleBrowsingProduct);

module.exports = {
    browsingHistoryRouter
}
const { getSingleFilterNavbarByAll , getSingleFilterNavbarById, handleAddSingleFilterNavbar, handleUpdateSingleFilterNavbar, handleDeleteSingleFilterNavbar } = require('../Controller/filterNavbarController');

const filterNavbarRouter = require('express').Router(); 

filterNavbarRouter.get('/get-single-by-property-query', getSingleFilterNavbarByAll);
filterNavbarRouter.get('/:item__id', getSingleFilterNavbarById);handleAddSingleFilterNavbar
filterNavbarRouter.post('/', handleAddSingleFilterNavbar);
filterNavbarRouter.put('/:item__id', handleUpdateSingleFilterNavbar);
filterNavbarRouter.delete('/:ID', handleDeleteSingleFilterNavbar);

module.exports = {
    filterNavbarRouter, 
}
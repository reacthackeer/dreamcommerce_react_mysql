const { getSingleFilterNavbarByAll , getSingleFilterNavbarById, handleAddSingleFilterNavbar, handleUpdateSingleFilterNavbar, handleDeleteSingleFilterNavbar, getAllFilterNavbar } = require('../Controller/filterNavbarController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const filterNavbarRouter = require('express').Router(); 

filterNavbarRouter.get('/get-single-by-property-query', getSingleFilterNavbarByAll);
filterNavbarRouter.get('/all', getAllFilterNavbar); 
filterNavbarRouter.get('/:item__id', getSingleFilterNavbarById); 
filterNavbarRouter.post('/', authenticateTokenModerator, handleAddSingleFilterNavbar);
filterNavbarRouter.put('/:item__id',  authenticateTokenModerator,  handleUpdateSingleFilterNavbar);
filterNavbarRouter.delete('/:ID',  authenticateTokenModerator,  handleDeleteSingleFilterNavbar);

module.exports = {
    filterNavbarRouter, 
}
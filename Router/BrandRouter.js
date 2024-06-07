const { 
    getAllBrand, 
    getSingleBrand, 
    addSingleBrand, 
    updateSingleBrand,
    deleteSingleBrand, 
} = require('../Controller/brandController'); 
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');
const brandRouter = require('express').Router();
brandRouter.put('/:ID', authenticateTokenModerator, updateSingleBrand);
brandRouter.delete('/:ID', authenticateTokenModerator, deleteSingleBrand);
brandRouter.get('/', getAllBrand); 
brandRouter.get('/:uid', getSingleBrand);
brandRouter.post('/', authenticateTokenModerator, addSingleBrand);




module.exports = {
    brandRouter
}
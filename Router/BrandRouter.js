const { 
    getAllBrand, 
    getSingleBrand, 
    addSingleBrand, 
    updateSingleBrand,
    deleteSingleBrand, 
} = require('../Controller/brandController'); 
const brandRouter = require('express').Router();
brandRouter.put('/:ID', updateSingleBrand);
brandRouter.delete('/:ID', deleteSingleBrand);
brandRouter.get('/', getAllBrand); 
brandRouter.get('/:uid', getSingleBrand);
brandRouter.post('/', addSingleBrand);




module.exports = {
    brandRouter
}
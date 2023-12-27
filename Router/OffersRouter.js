const { 
    handleGetAllSingleOfferProduct, 
    handleGetAllMultipleOffersProduct, 
    handleAddSingleOffer,
    handleGetSingleOffer,
    handleUpdateSingleOffer,
    deleteSingleOffer
} = require('../Controller/OffersController'); 

const offerRouter = require('express').Router(); 

offerRouter.get('/:offer', handleGetAllSingleOfferProduct); 
offerRouter.get('/single/:ID', handleGetSingleOffer); 
offerRouter.put('/single/:ID', handleUpdateSingleOffer); 
offerRouter.delete('/single/:ID', deleteSingleOffer); 
offerRouter.get('/', handleGetAllMultipleOffersProduct); 
offerRouter.post('/', handleAddSingleOffer);

module.exports = {
    offerRouter
};
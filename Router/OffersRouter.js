const { 
    handleGetAllSingleOfferProduct, 
    handleGetAllMultipleOffersProduct, 
    handleAddSingleOffer,
    handleGetSingleOffer,
    handleUpdateSingleOffer,
    deleteSingleOffer,
    handleGetAllOffers,
    handleGetAllMultipleOffersProductSinglePage
} = require('../Controller/OffersController'); 

const offerRouter = require('express').Router(); 


offerRouter.get('/single/:ID', handleGetSingleOffer); 
offerRouter.get('/multiple', handleGetAllOffers); 
offerRouter.put('/single/:ID', handleUpdateSingleOffer); 
offerRouter.delete('/single/:ID', deleteSingleOffer); 
offerRouter.get('/', handleGetAllMultipleOffersProduct); 
offerRouter.get('/offers-page', handleGetAllMultipleOffersProductSinglePage); 
offerRouter.post('/', handleAddSingleOffer);
offerRouter.get('/:offer', handleGetAllSingleOfferProduct); 

module.exports = {
    offerRouter
};
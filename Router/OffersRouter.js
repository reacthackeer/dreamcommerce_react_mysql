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
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const offerRouter = require('express').Router(); 


offerRouter.get('/single/:ID', handleGetSingleOffer); 
offerRouter.get('/multiple', handleGetAllOffers); 
offerRouter.put('/single/:ID',  authenticateTokenModerator,  handleUpdateSingleOffer); 
offerRouter.delete('/single/:product__id/:offer__name',  authenticateTokenModerator,  deleteSingleOffer); 
offerRouter.get('/', handleGetAllMultipleOffersProduct); 
offerRouter.get('/offers-page', handleGetAllMultipleOffersProductSinglePage); 
offerRouter.post('/',  authenticateTokenModerator,  handleAddSingleOffer);
offerRouter.get('/:offer', handleGetAllSingleOfferProduct); 

module.exports = {
    offerRouter
};
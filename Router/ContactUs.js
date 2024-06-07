const { handleGetSingleContactUs, handleAddSingleContactUs } = require('../Controller/contactUsController');
const { authenticateTokenAdmin } = require('../utils/jsonwebtoken');

const contactUsRouter = require('express').Router();

contactUsRouter.post('/', authenticateTokenAdmin, handleAddSingleContactUs); 
contactUsRouter.get('/', handleGetSingleContactUs); 

module.exports = {
    contactUsRouter
}

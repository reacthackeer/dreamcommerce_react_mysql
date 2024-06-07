const { 
    getAllParentFatherNavbar, 
    getSingleParentFatherNavbar, 
    addSingleParentFatherNavbar, 
    updateSingleParentFatherNavbar, 
    deleteSingleParentFatherNavbar, 
    getAllParentFatherUpNavbar,
    getAllParentFatherNavbarByUp
} = require('../Controller/parentFatherRouter');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const parentFatherNavbarRouter = require('express').Router();
parentFatherNavbarRouter.get('/by-up', getAllParentFatherNavbarByUp)
parentFatherNavbarRouter.get('/', getAllParentFatherNavbar);
parentFatherNavbarRouter.get('/get-all-parent-father-up', getAllParentFatherUpNavbar);
parentFatherNavbarRouter.get('/:item__id', getSingleParentFatherNavbar);
parentFatherNavbarRouter.post('/',  authenticateTokenModerator,  addSingleParentFatherNavbar);
parentFatherNavbarRouter.put('/:item__id',  authenticateTokenModerator,  updateSingleParentFatherNavbar);
parentFatherNavbarRouter.delete('/:item__id',  authenticateTokenModerator,  deleteSingleParentFatherNavbar);

module.exports = {
    parentFatherNavbarRouter
}
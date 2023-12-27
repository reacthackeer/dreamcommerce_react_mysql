const { 
    getAllParentFatherNavbar, 
    getSingleParentFatherNavbar, 
    addSingleParentFatherNavbar, 
    updateSingleParentFatherNavbar, 
    deleteSingleParentFatherNavbar, 
    getAllParentFatherUpNavbar,
    getAllParentFatherNavbarByUp
} = require('../Controller/parentFatherRouter');

const parentFatherNavbarRouter = require('express').Router();
parentFatherNavbarRouter.get('/by-up', getAllParentFatherNavbarByUp)
parentFatherNavbarRouter.get('/', getAllParentFatherNavbar);
parentFatherNavbarRouter.get('/get-all-parent-father-up', getAllParentFatherUpNavbar);
parentFatherNavbarRouter.get('/:item__id', getSingleParentFatherNavbar);
parentFatherNavbarRouter.post('/', addSingleParentFatherNavbar);
parentFatherNavbarRouter.put('/:item__id', updateSingleParentFatherNavbar);
parentFatherNavbarRouter.delete('/:item__id', deleteSingleParentFatherNavbar);

module.exports = {
    parentFatherNavbarRouter
}
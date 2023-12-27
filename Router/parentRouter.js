const { getAllParentNavbar, getSingleParentNavbar, addSingleParentNavbar, updateSingleParentNavbar, deleteSingleParentNavbar, getAllParentFatherNavbar, getAllParentNavbarAll } = require('../Controller/parentController');

const parentNavbarRouter = require('express').Router();
parentNavbarRouter.get('/get-all', getAllParentNavbarAll);
parentNavbarRouter.get('/', getAllParentNavbar);
parentNavbarRouter.get('/get-all-parent-father', getAllParentFatherNavbar);
parentNavbarRouter.get('/:item__id', getSingleParentNavbar);
parentNavbarRouter.post('/', addSingleParentNavbar);
parentNavbarRouter.put('/:item__id', updateSingleParentNavbar);
parentNavbarRouter.delete('/:item__id', deleteSingleParentNavbar);

module.exports = {
    parentNavbarRouter
}
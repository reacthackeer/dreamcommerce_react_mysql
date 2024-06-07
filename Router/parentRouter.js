const { getAllParentNavbar, getSingleParentNavbar, addSingleParentNavbar, updateSingleParentNavbar, deleteSingleParentNavbar, getAllParentFatherNavbar, getAllParentNavbarAll } = require('../Controller/parentController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const parentNavbarRouter = require('express').Router();
parentNavbarRouter.get('/get-all', getAllParentNavbarAll);
parentNavbarRouter.get('/', getAllParentNavbar);
parentNavbarRouter.get('/get-all-parent-father', getAllParentFatherNavbar);
parentNavbarRouter.get('/:item__id', getSingleParentNavbar);
parentNavbarRouter.post('/',  authenticateTokenModerator,  addSingleParentNavbar);
parentNavbarRouter.put('/:item__id',  authenticateTokenModerator,  updateSingleParentNavbar);
parentNavbarRouter.delete('/:item__id',  authenticateTokenModerator,  deleteSingleParentNavbar);

module.exports = {
    parentNavbarRouter
}
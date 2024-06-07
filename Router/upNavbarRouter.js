const { getAllUpNavbar, getSingleUpNavbar, addSingleUpNavbar, updateSingleUpNavbar, deleteSingleUpNavbar } = require('../Controller/upController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const upNavbarRouter = require('express').Router();

upNavbarRouter.get('/', getAllUpNavbar);
upNavbarRouter.get('/:item__id', getSingleUpNavbar);
upNavbarRouter.post('/',  authenticateTokenModerator,  addSingleUpNavbar);
upNavbarRouter.put('/:item__id',  authenticateTokenModerator,  updateSingleUpNavbar);
upNavbarRouter.delete('/:item__id',  authenticateTokenModerator,  deleteSingleUpNavbar);

module.exports = {
    upNavbarRouter
}
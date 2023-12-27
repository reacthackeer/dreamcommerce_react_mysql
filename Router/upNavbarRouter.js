const { getAllUpNavbar, getSingleUpNavbar, addSingleUpNavbar, updateSingleUpNavbar, deleteSingleUpNavbar } = require('../Controller/upController');

const upNavbarRouter = require('express').Router();

upNavbarRouter.get('/', getAllUpNavbar);
upNavbarRouter.get('/:item__id', getSingleUpNavbar);
upNavbarRouter.post('/', addSingleUpNavbar);
upNavbarRouter.put('/:item__id', updateSingleUpNavbar);
upNavbarRouter.delete('/:item__id', deleteSingleUpNavbar);

module.exports = {
    upNavbarRouter
}
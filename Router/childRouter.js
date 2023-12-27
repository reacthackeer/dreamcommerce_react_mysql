const { getAllChildNavbar, getSingleChildNavbar, addSingleChildNavbar, updateSingleChildNavbar, deleteSingleChildNavbar, getAllChildParentNavbar } = require('../Controller/childController');

const childNavbarRouter = require('express').Router();
childNavbarRouter.get('/', getAllChildNavbar);
childNavbarRouter.get('/get-all-parent', getAllChildParentNavbar);
childNavbarRouter.get('/:item__id', getSingleChildNavbar);
childNavbarRouter.post('/', addSingleChildNavbar);
childNavbarRouter.put('/:item__id', updateSingleChildNavbar);
childNavbarRouter.delete('/:item__id', deleteSingleChildNavbar);

module.exports = {
    childNavbarRouter
}
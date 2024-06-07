const { getAllChildNavbar, getSingleChildNavbar, addSingleChildNavbar, updateSingleChildNavbar, deleteSingleChildNavbar, getAllChildParentNavbar } = require('../Controller/childController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const childNavbarRouter = require('express').Router();
childNavbarRouter.get('/', getAllChildNavbar);
childNavbarRouter.get('/get-all-parent', getAllChildParentNavbar);
childNavbarRouter.get('/:item__id', getSingleChildNavbar);
childNavbarRouter.post('/', authenticateTokenModerator, addSingleChildNavbar);
childNavbarRouter.put('/:item__id',  authenticateTokenModerator, updateSingleChildNavbar);
childNavbarRouter.delete('/:item__id',  authenticateTokenModerator, deleteSingleChildNavbar);

module.exports = {
    childNavbarRouter
}
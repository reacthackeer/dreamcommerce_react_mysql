const { getAllBanner, getSingleBanner, addSingleBanner, updateSingleBanner, deleteSingleBanner } = require('../Controller/BannerController');
const { authenticateTokenModerator } = require('../utils/jsonwebtoken');

const bannerRouter = require('express').Router();

bannerRouter.get('/', getAllBanner);
bannerRouter.get('/:bannerId', getSingleBanner);
bannerRouter.post('/', authenticateTokenModerator, addSingleBanner);
bannerRouter.put('/:bannerId', authenticateTokenModerator, updateSingleBanner);
bannerRouter.delete('/:bannerId', authenticateTokenModerator, deleteSingleBanner);

module.exports = bannerRouter;
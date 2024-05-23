const { getAllBanner, getSingleBanner, addSingleBanner, updateSingleBanner, deleteSingleBanner } = require('../Controller/BannerController');

const bannerRouter = require('express').Router();

bannerRouter.get('/', getAllBanner);
bannerRouter.get('/:bannerId', getSingleBanner);
bannerRouter.post('/', addSingleBanner);
bannerRouter.put('/:bannerId', updateSingleBanner);
bannerRouter.delete('/:bannerId', deleteSingleBanner);

module.exports = bannerRouter;
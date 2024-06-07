// let {type, title, link, img__src,store__id, visible} = postData;
const asyncHandler = require('express-async-handler');
const Banner = require('../model/Banner');


const getAllBanner = asyncHandler(async(req, res, next)=>{
    try {
        let allBannerResult = await Banner.findAll({});
        let allTypes = [];
        let allBannerResultByType = [];
        allBannerResult.forEach((extraInfo)=> { 
            let info = extraInfo.dataValues;
            if(allTypes.indexOf(info.type) === -1){
                allTypes.push(info.type)
                allBannerResultByType.push({title: info.type, banners: [info]});
            }else{
                let indexResult = allTypes.indexOf(info.type);  
                allBannerResultByType[indexResult].banners.push(info);
            }
        }) 
        res.json(allBannerResultByType); 
    } catch (error) {
        next(new Error(error.message))
    }
});

const getSingleBanner = asyncHandler(async(req, res, next)=>{
    let bannerId = req.params.bannerId;
    if(bannerId){
        try {
            let singleBannerResult = await Banner.findOne({where: {id: bannerId}});
            if(singleBannerResult && singleBannerResult?.dataValues?.id){
                res.json(singleBannerResult);
            }else{
                next(new Error('Banner not founded!'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
});

const addSingleBanner = asyncHandler(async(req, res, next)=>{
    const bannerData = req.body;
    if(bannerData && bannerData?.link){
        try {
            let bannerAddResult = await Banner.create(bannerData);
            res.json(bannerAddResult);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
})

const updateSingleBanner = asyncHandler(async(req, res, next)=>{
    let bannerUpdateData = req.body;
    let bannerId = req.params.bannerId;
    if(bannerUpdateData && bannerUpdateData?.link){
        try {
            let bannerUpdateResult = await Banner.update(bannerUpdateData,{where: {id: bannerId}});
            if(bannerUpdateResult && bannerUpdateResult[0]){
                res.json(bannerUpdateData);
            }else{
                next(new Error('Internal server error!'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
})

const deleteSingleBanner = asyncHandler(async(req, res, next)=>{
    const bannerId = req.params.bannerId;
    if(bannerId){
        try {
            let bannerDeleteResult = await Banner.destroy({where: {id: bannerId}}); 
            res.json(bannerDeleteResult);
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid server request!'))
    }
})

module.exports = {
    addSingleBanner, 
    getAllBanner,
    getSingleBanner,
    updateSingleBanner,
    deleteSingleBanner
}
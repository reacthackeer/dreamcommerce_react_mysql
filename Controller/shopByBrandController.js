const asyncHandler = require('express-async-handler');
const { generalSqlOperation, updateGeneralSqlOperation } = require('../query/offer__query');
const { getAllJustSqlProduct, getSingleJustSqlProduct, deleteSingleSqlProduct } = require('../query/products__query');
const ShopByBrand = require('../model/ShopByBrand');

const addSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {name, link, img__src} = req.body;
    if(name && link && img__src){
        try {
            let createResult = await ShopByBrand.create({name, link, img__src});
            if(createResult && createResult.dataValues.id){
                res.json({status__code: 200, message: 'Successfully inserted!', data: createResult.dataValues});
            }else{
                next(new Error('Internal server error!'));
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error("Invalid post request!"))
    }
});

const getallShopByBrand = asyncHandler(async(req, res, next)=>{
    try {
        let allCategoryResult = await ShopByBrand.findAll({});
        res.json(allCategoryResult)
    } catch (error) {
        next(new Error(error.message))
    }
});

const getSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let singleShopByBrand = await ShopByBrand.findOne({where: {id}});
            if(singleShopByBrand && singleShopByBrand.dataValues.id){
                res.json(singleShopByBrand)
            }else{
                next(new Error('Not founded!'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Internal server error!'))
    }
})

const updateSingleShopByBrand = asyncHandler(async(req, res, next) => {
    let {id: categoryId} = req.params;
    let {name, link, img__src, id} = req.body;
    if(name && link && id && img__src && categoryId){
        try {
            let singleUpdateResult = await ShopByBrand.update({name, link, img__src},{where: {id: categoryId}});
            if(singleUpdateResult && singleUpdateResult[0]){
                res.json({status__code: 200, message: 'Successfully data updated!', data: {name, link, img__src, id: categoryId}})
            }else{
                next(new Error('Invalid update requested!'))
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Invalid put requested!'))
    }
})

const deleteSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let deleteResult = await ShopByBrand.destroy({where: {id}});
            if(deleteResult){
                res.json("Successfully data deleted!");
            }else{
                next(new Error('Invalid delete request!'));
            }
        } catch (error) {
            next(new Error(error.message))
        }
    }else{
        next(new Error('Internal server error!'))
    }
})
module.exports = {
    addSingleShopByBrand,
    updateSingleShopByBrand,
    getallShopByBrand,
    getSingleShopByBrand,
    deleteSingleShopByBrand
}
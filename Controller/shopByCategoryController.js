const asyncHandler = require('express-async-handler'); 
const ShopByCategory = require('../model/ShopByCategory');

const addSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {name, link, img__src} = req.body;
    if(name && link && img__src){
        try {
            let createResult = await ShopByCategory.create({name, link, img__src});
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

const getallShopByCategory = asyncHandler(async(req, res, next)=>{
    try {
        let allCategoryResult = await ShopByCategory.findAll({});
        res.json(allCategoryResult)
    } catch (error) {
        next(new Error(error.message))
    }
});

const getSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let singleShopByCategory = await ShopByCategory.findOne({where: {id}});
            if(singleShopByCategory && singleShopByCategory.dataValues.id){
                res.json(singleShopByCategory)
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

const updateSingleShopByCategory = asyncHandler(async(req, res, next) => {
    let {id: categoryId} = req.params;
    let {name, link, img__src, id} = req.body;
    if(name && link && id && img__src && categoryId){
        try {
            let singleUpdateResult = await ShopByCategory.update({name, link, img__src},{where: {id: categoryId}});
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

const deleteSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let deleteResult = await ShopByCategory.destroy({where: {id}});
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
    addSingleShopByCategory,
    updateSingleShopByCategory,
    getallShopByCategory,
    getSingleShopByCategory,
    deleteSingleShopByCategory
}
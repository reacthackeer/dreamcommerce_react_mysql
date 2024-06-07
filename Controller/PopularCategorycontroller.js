const asyncHandler = require('express-async-handler'); 
const PopularCategory = require('../model/PopularCategory');

const addSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {name, link, img__src} = req.body;
    if(name && link && img__src){
        try {
            let createResult = await PopularCategory.create({name, link, img__src});
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

const getallPopularCategory = asyncHandler(async(req, res, next)=>{
    try {
        let allCategoryResult = await PopularCategory.findAll({});
        res.json(allCategoryResult)
    } catch (error) {
        next(new Error(error.message))
    }
});

const getSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let singlePopularCategory = await PopularCategory.findOne({where: {id}});
            if(singlePopularCategory && singlePopularCategory.dataValues.id){
                res.json(singlePopularCategory)
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

const updateSinglePopularCategory = asyncHandler(async(req, res, next) => {
    let {id: categoryId} = req.params;
    let {name, link, img__src, id} = req.body;
    if(name && link && id && img__src && categoryId){
        try {
            let singleUpdateResult = await PopularCategory.update({name, link, img__src},{where: {id: categoryId}});
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

const deleteSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {id} = req.params;
    if(id){
        try {
            let deleteResult = await PopularCategory.destroy({where: {id}});
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
    addSinglePopularCategory,
    updateSinglePopularCategory,
    getallPopularCategory,
    getSinglePopularCategory,
    deleteSinglePopularCategory
}
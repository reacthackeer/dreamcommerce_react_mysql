const asyncHandler = require('express-async-handler');
const { generalSqlOperation, updateGeneralSqlOperation } = require('../query/offer__query');
const { getAllJustSqlProduct, getSingleJustSqlProduct, deleteSingleSqlProduct } = require('../query/products__query');
const PopularCategory = require('../model/popularCategory');

const addSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {name, link} = req.body;
    if(name && link){
        try {
            let createResult = await PopularCategory.create({name, link});
            if(createResult && createResult.dataValues.id){
                res.json(createResult.dataValues);
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

const updateSinglePopularCategory = asyncHandler(async(req, res, next) => {
    let {name, link, ID} = req.body; 
    if(name && link && ID){
        let sql = `UPDATE popular__category SET name="${name}", link="${link}" WHERE ID="${ID}"`;
        try {
            let result = await updateGeneralSqlOperation(sql);
                res.json(result);
        } catch (error) {
            next(new Error(error.message));
        }
    }else{
        next(new Error("Invalid put request!"))
    }
})
const getallPopularCategory = asyncHandler(async(req, res, next)=>{
    try {
        let allCategoryResult = await PopularCategory.findAll({})
    } catch (error) {
        next(new Error(error.message))
    }
});

const getSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {ID} = req.params;
    let sql = `SELECT * FROM popular__category WHERE ID="${ID}"`;
    if(ID){
        let result = await getSingleJustSqlProduct(sql);
        res.json(result);
    }else{
        next(new Error("Invalid get request!"))
    }
})

const deleteSinglePopularCategory = asyncHandler(async(req, res, next)=>{
    let {ID} = req.params;

    if(ID){
        let sql = `DELETE FROM popular__category WHERE ID="${ID}"`;
        let result = await deleteSingleSqlProduct(sql);
        res.json(result);
    }else{
        next(new Error("Invalid get request!"))
    }
})
module.exports = {
    addSinglePopularCategory,
    updateSinglePopularCategory,
    getallPopularCategory,
    getSinglePopularCategory,
    deleteSinglePopularCategory
}
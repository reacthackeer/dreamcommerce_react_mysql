const { getSingleOfferQuery, generalSqlOperation, updateGeneralSqlOperation, deleteGeneralSqlOperation, generalSqlOperationRow } = require('../query/offer__query');

const asyncHandler = require('express-async-handler');
const {getSingleBrandSql, addSingleBrandSql, updateSingleBrandSql } = require('../sql/sql');

const getAllBrand = asyncHandler(async(req, res, next)=>{
    const page = Number(req?.query?.page) || 1;
    const peerPage = Number(req?.query?.limit) || 500 
    try {
        const result = await getSingleOfferQuery(page, peerPage);
        res.json(result)
    } catch (error) { 
        const errorBody = new Error('An error occurred while fetching data');
        errorBody.status = 500;
        next(errorBody);
    }
});

const getSingleBrand = asyncHandler(async(req, res, next)=>{
    let uid = req.params.uid || ''
    let query = await getSingleBrandSql(uid); 
    try {
        const result = await generalSqlOperationRow(query);
        res.json(result)
    } catch (error) {  
        const errorBody = new Error('An error occurred while fetching data');
        errorBody.status = 500;
        next(errorBody);
    }
});

const addSingleBrand = asyncHandler(async(req, res, next)=>{
    const data = req.body;
    if(data?.brand && data?.uid && data?.src){
        const query = addSingleBrandSql(data);
        try {
            const result = await generalSqlOperation(query);
            res.json(result)
        } catch (error) { 
            const errorBody = new Error('An error occurred while fetching data');
            errorBody.status = 500;
            next(errorBody);
        }
    }else{
        const error = new Error('Invalid server request?');
        error.status = 500;
        next(error);
    }
})

const updateSingleBrand = asyncHandler(async(req, res, next)=>{
    const ID = req.params.ID
    let data = req.body; 
    if(data?.brand && data?.uid && data?.src && ID){
        data.ID = ID;
        const query = updateSingleBrandSql(data);
        try {
            const result = await updateGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{ 
                next(new Error('UPDATED DATA NOT FOUND!'));
            }
        } catch (error) {   
            next(new Error('An error occurred while updating data'));
        }
    }else{ 
        next(new Error('Invalid server request!'));
    }
})

const deleteSingleBrand = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.ID 
    if(ID){ 
        const query = `DELETE FROM brands WHERE ID="${ID}"`
        try {
            const result = await deleteGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{
                const errorBody = new Error('UPDATED DATA NOT FOUND!');
                errorBody.status = 500;
                next(errorBody);
            }
        } catch (error) {  
            const errorBody = new Error('An error occurred while updating data');
            errorBody.status = 500;
            next(errorBody);
        }
    }else{
        const error = new Error('Invalid server request?');
        error.status = 500;
        next(error);
    }
})
module.exports = {
    getAllBrand, 
    getSingleBrand,
    addSingleBrand,
    updateSingleBrand,
    deleteSingleBrand
}
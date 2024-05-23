const asyncHandler = require('express-async-handler');
const { getSingleSqlProductWithDataConverter, addSingleSqlProduct, updateSingleSqlProduct, getSingleSqlProductWithDataConverterSecond } = require('../query/products__query');
const { dataConverterUtils } = require('../utils/dataConverterUtils');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getSingleFilterNavbarByAll = asyncHandler(async(req, res, next)=>{
    let {child, parent, parent__father} = req.query;
    
    parent__father = parent__father.replace(/anndd/g,'&');
    parent = parent.replace(/anndd/g,'&');
    child = child.replace(/anndd/g,'&');
    if(child && parent && parent__father){
        try {
            let sql = `SELECT * FROM filter__navbar WHERE child="${child}" AND parent="${parent}" AND parent__father="${parent__father}"`;
            let result = await getSingleSqlProductWithDataConverter(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
        }
    }else{
        let newError = new Error("Invalid server request!");
            newError.status = 204;
            next(newError);
    }
});
const getAllFilterNavbar = asyncHandler(async(req, res, next)=>{
    try {
        let sql = `SELECT * FROM filter__navbar`;
        let result = await getSingleSqlProductWithDataConverterSecond(sql);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
        newError.status = 500;
        next(newError);
    }
});

const getSingleFilterNavbarById = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;  
    if(item__id){
        try {
            let sql = `SELECT * FROM filter__navbar WHERE ID="${item__id}"`;
            let result = await getSingleSqlProductWithDataConverter(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
        }
    }else{
        let newError = new Error("Invalid server request!");
            newError.status = 204;
            next(newError); 
    }
});

const handleAddSingleFilterNavbar = asyncHandler(async(req, res, next)=>{
    let {child, parent, parent__father, data} = req.body;
    if(child && parent && parent__father && data?.length > 0){
        let bufferData = dataConverterUtils.bufferDataMaker(data);
        let sql = `INSERT INTO filter__navbar (child, parent, parent__father, data) VALUES("${child}","${parent}","${parent__father}",'${bufferData}')`;
        try {
            let result = await addSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status = 500;
                next(newError);
        }
    }else{
        let newError = new Error("Invalid server request!");
            newError.status = 204;
            next(error);
    }
});

const handleUpdateSingleFilterNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {child, parent, parent__father, data} = req.body;
    if(child && parent && parent__father && data?.length > 0){
        let bufferData = dataConverterUtils.bufferDataMaker(data);
        let sql = `UPDATE filter__navbar SET child="${child}", parent="${parent}", parent__father="${parent__father}", data='${bufferData}' WHERE ID="${item__id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status = 500;
                next(newError);
        }
    }else{
        let newError = new Error("Invalid server request!");
            newError.status = 204;
            next(error);
    } 
})

const handleDeleteSingleFilterNavbar = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.ID 
    if(ID){ 
        const query = `DELETE FROM filter__navbar WHERE ID="${ID}"`
        try {
            const result = await deleteGeneralSqlOperation(query);
            if(result?.status__code === 200){
                res.json(result);
            }else{
                const errorBody = new Error('DELETED DATA NOT FOUND!');
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
    getAllFilterNavbar,
    getSingleFilterNavbarByAll,
    getSingleFilterNavbarById,
    handleAddSingleFilterNavbar,
    handleUpdateSingleFilterNavbar,
    handleDeleteSingleFilterNavbar
}
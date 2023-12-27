const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllUpNavbar = asyncHandler(async(req, res, next)=>{
    let sql = `SELECT * FROM up`;
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})

const getSingleUpNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM up WHERE ID="${item__id}"`;
        try {
            let result = await getSingleSqlProduct(sql);
            res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
        }
    }else{
        let newError = new Error("Invalid server request");
        newError.status=204;
        next(newError);
    }
})

const addSingleUpNavbar = asyncHandler(async(req, res, next)=>{
    let {name, uid, src} = req.body;
    if( name && uid && src ){
        let sql = `INSERT INTO up (name, uid, src) VALUES ("${name}", "${uid}","${src}")`;
        try {
            let result = await addSingleSqlProduct(sql);
            if(result.status__code === 201){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
            newError.status=204;
            next(newError);
    }
})

const updateSingleUpNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, uid, src} = req.body;
    if(item__id &&  name &&   uid && src){
        let sql = `UPDATE up SET name="${name}", uid="${uid}",src="${src}" WHERE ID="${item__id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
            if(result.status__code === 200){
                res.json(result);
            }else{
                let newError = new Error('Invalid server request!');
                newError.status=204;
                next(newError);
            }
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(error);
        }
    }else{
        let newError = new Error('Invalid server request!');
        newError.status=204;
        next(newError);
    }
})

const deleteSingleUpNavbar = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id
    if(ID){ 
        const query = `DELETE FROM up WHERE ID="${ID}"`;
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
            const errorBody = new Error('An error occurred while deleting data');
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
    getAllUpNavbar,
    getSingleUpNavbar,
    addSingleUpNavbar,
    updateSingleUpNavbar,
    deleteSingleUpNavbar
}
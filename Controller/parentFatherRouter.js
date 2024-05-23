const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    let sql = `SELECT * FROM grandfather`;
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})

const getAllParentFatherNavbarByUp = asyncHandler(async(req, res, next)=>{
    
    let {up} = req.query;   
        up = up.replace(/anndd/g,'&');
    if(up){
        let sql = `SELECT * FROM grandfather WHERE up='${up}'`;
        try {
            let result = await getAllJustSqlProduct(sql);
            res.json(result);
        } catch (error) { 
                next(new Error(error.message));
        }
    }else{
        next(new Error('Invalid server request!'));
    }
})
const getAllParentFatherUpNavbar = asyncHandler(async(req, res, next)=>{
    let {up} = req.query;
    up = up.replace(/anndd/g,'&');
    if(up){
        let sql = `SELECT * FROM grandfather WHERE up="${up}"`;
        try {
            let result = await getAllJustSqlProduct(sql);
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

const getSingleParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM grandfather WHERE ID="${item__id}"`;
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

const addSingleParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    let {name, uid, src, up} = req.body;
    if( name &&  uid && src && up){
        let sql = `INSERT INTO grandfather (name, uid, src, up) VALUES ("${name}", "${uid}","${src}","${up}")`;
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

const updateSingleParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, uid, src, up} = req.body;
    if(item__id &&  name &&   uid && src && up){
        let sql = `UPDATE grandfather SET name="${name}", uid="${uid}",src="${src}", up="${up}" WHERE ID="${item__id}"`;
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


const deleteSingleParentFatherNavbar = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id
    if(ID){ 
        const query = `DELETE FROM grandfather WHERE ID="${ID}"`
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
    getAllParentFatherNavbarByUp,
    getAllParentFatherNavbar,
    getSingleParentFatherNavbar,
    addSingleParentFatherNavbar,
    updateSingleParentFatherNavbar,
    deleteSingleParentFatherNavbar,
    getAllParentFatherUpNavbar
}
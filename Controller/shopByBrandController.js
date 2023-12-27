const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllShopByBrand = asyncHandler(async(req, res, next)=>{
    
    let sql = `SELECT * FROM shop__by__brand`;
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result);
    } catch (error) {
        console.log(error.message);
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})
    

const getSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM shop__by__brand WHERE ID="${item__id}"`;
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

const addSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {name, img, link} = req.body;
    if( name && link && img){
        let sql = `INSERT INTO shop__by__brand (name, link, img) VALUES ("${name}","${link}","${img}")`;
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

const updateSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, link, img} = req.body;
    if(item__id &&  name && link && img){
        let sql = `UPDATE shop__by__brand SET name="${name}",link="${link}",img="${img}" WHERE ID="${item__id}"`;
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


const deleteSingleShopByBrand = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id  
    if(ID){ 
        const query = `DELETE FROM shop__by__brand WHERE ID="${ID}"`
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
    getAllShopByBrand,
    getSingleShopByBrand,
    addSingleShopByBrand,
    updateSingleShopByBrand,
    deleteSingleShopByBrand
}
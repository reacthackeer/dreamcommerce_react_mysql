const asyncHandler = require('express-async-handler');
const { getAllJustSqlProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct } = require('../query/products__query');
const { deleteGeneralSqlOperation } = require('../query/offer__query');

const getAllShopByCategory = asyncHandler(async(req, res, next)=>{
    let sql = `SELECT * FROM shop__by__category `;
    try {
        let result = await getAllJustSqlProduct(sql);
        res.json(result);
    } catch (error) {
        let newError = new Error(error.message);
            newError.status = 500;
            next(newError);
    }
})
    

const getSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM shop__by__category WHERE ID="${item__id}"`;
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

const addSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {name, img, link} = req.body;
    if( name && link && img){
        let sql = `INSERT INTO shop__by__category (name, link, img) VALUES ("${name}","${link}","${img}")`;
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

const updateSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    let {name, link, img} = req.body;
    if(item__id &&  name && link && img){
        let sql = `UPDATE shop__by__category SET name="${name}",link="${link}",img="${img}" WHERE ID="${item__id}"`;
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


const deleteSingleShopByCategory = asyncHandler(async(req, res, next)=>{
    const ID = req.params?.item__id  
    if(ID){ 
        const query = `DELETE FROM shop__by__category WHERE ID="${ID}"`
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
    getAllShopByCategory,
    getSingleShopByCategory,
    addSingleShopByCategory,
    updateSingleShopByCategory,
    deleteSingleShopByCategory
}
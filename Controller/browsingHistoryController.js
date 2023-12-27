const asyncHandler = require('express-async-handler'); 
const { getAllJustProduct, getSingleSqlProduct, addSingleSqlProduct, updateSingleSqlProduct, deleteSingleSqlProduct, getAllSearchProduct } = require('../query/products__query');   
const { getSqlProductLength } = require('../query/lengthQuery');

const handleGetAllSingleUserBrowsingProduct = asyncHandler(async(req, res, next)=>{
    const user__id = req.params.user__id;   
    const count = `SELECT COUNT(*) FROM browsing__history WHERE user__id='${user__id}'`;
    const page = Number(req.query?.page) || 1;
    let peerPage = Number(req.query?.peerPage) || 45;
        peerPage = peerPage > 70 ? 70 : peerPage
    try{
        const result = await getSqlProductLength(count); 
        if(result[0]['COUNT(*)'] > 0){   
            let total__products = Number(result[0]['COUNT(*)']);
            let total__page = Math.ceil(Number(result[0]['COUNT(*)']) / peerPage);
            const offset = (page - 1) * peerPage;
            const limit = peerPage;  
            const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, p.ID FROM products p LEFT JOIN browsing__history b ON b.product__id=p.ID WHERE b.user__id='${user__id}' LIMIT ${offset},${limit}`;
            try {
            let result = await getAllSearchProduct(count1);
            res.json({...result, total__page, total__products, current__limit: [offset, offset+limit]});
            } catch (error) { 
                const error1 = new Error(error.message);
                    error1.status = 500;
                    next(error1);
            } 
        }else{
            const newError = new Error('No product');
                newError.status = 500;
            next(newError);
        }
    } catch (error) { 
        res.json(error)
    }
})

const handleGetSingleBrowsingProduct = asyncHandler(async(req, res, next)=>{
    const {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM browsing__history WHERE ID='${item__id}'`;
        try {
            let result = await getSingleSqlProduct(sql);
                res.json(result);
        } catch (error) {
            let newError = new Error(error.message);
                newError.status=204;
                next(newError);
        }
    }else{
        let newError = new Error('Invalid Server Request!');
            newError.status = 500;
            next(newError);
    }
})

const handleAddSingleBrowsingProduct = asyncHandler(async(req, res, next)=>{
    let {userId, productId} = req.body;
    if(productId && userId){
        let sql = `SELECT * FROM browsing__history WHERE user__id='${userId}' AND product__id='${productId}'`;
        try {
            let result = await getSingleSqlProduct(sql);
                if(result.status__code === 204){
                    let sql = `INSERT INTO browsing__history (user__id, product__id) VALUES ("${userId}","${productId}")`;
                    try {
                        let result = await addSingleSqlProduct(sql);
                            if(result?.status__code === 201){
                                const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, p.ID FROM products p LEFT JOIN browsing__history b ON b.product__id=p.ID WHERE b.user__id='${userId}' AND b.product__id != '${productId}'`;
                                try {
                                    let result = await getAllJustProduct(count1);
                                    res.json(result);
                                } catch (error) { 
                                    const error1 = new Error(error.message);
                                        error1.status = 500;
                                        next(error1);
                                } 
                            }
                    } catch (error) {
                        let newError = new Error(error.message);
                        newError.status=500;
                        next(newError);
                    }
                }else{
                    const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, p.ID FROM products p LEFT JOIN browsing__history b ON b.product__id=p.ID WHERE b.user__id='${userId}' AND b.product__id != '${productId}'`;
                    try {
                        let result = await getAllJustProduct(count1);
                        res.json(result);
                    } catch (error) { 
                        const error1 = new Error(error.message);
                            error1.status = 500;
                            next(error1);
                    } 
                } 
        } catch (error) {
            let newError = new Error(error.message);
                newError.status=204;
                next(newError);
        }

    }else{
        let newError = new Error('Invalid Server Request!');
        newError.status = 500;
        next(newError);
    }
})


const handleUpdateSingleBrowsingProduct = asyncHandler(async(req, res, next)=>{
    const {item__id} = req.params;
    let { product__id, user__id } = req.body; 
    if( product__id && user__id && item__id ){
        let sql = `UPDATE browsing__history SET product__id="${product__id}", user__id="${user__id}" WHERE ID="${item__id}"`;
        try {
            let result = await updateSingleSqlProduct(sql);
                res.json(result)
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(newError);
        }
    }else{
        let newError = new Error('Invalid Server Request!');
        newError.status = 500;
        next(newError);
    }
})
const handleDeleteSingleBrowsingProduct = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `DELETE FROM browsing__history WHERE ID="${item__id}"`;
        try {
            let result = await deleteSingleSqlProduct(sql);
                res.json(result)
        } catch (error) {
            let newError = new Error(error.message);
            newError.status=500;
            next(newError);
        }
    }else{
        let newError = new Error('Invalid Server Request!');
        newError.status = 500;
        next(newError);
    }
})
module.exports = { 
    handleGetAllSingleUserBrowsingProduct,
    handleGetSingleBrowsingProduct,
    handleAddSingleBrowsingProduct,
    handleUpdateSingleBrowsingProduct,
    handleDeleteSingleBrowsingProduct
}
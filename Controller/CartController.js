const asyncHandler = require('express-async-handler'); 
const fs = require('fs');
const { 
    getAllJustProduct, 
    getSingleSqlProduct, 
    addSingleSqlProduct, 
    updateSingleSqlProduct, 
    deleteSingleSqlProduct, 
    getAllJustSqlProduct 
} = require('../query/products__query');   
const { handlePdfGeneratorMaster, options } = require('../pdf/wishlist');
const { wishlistPdfHtmlString } = require('../printLibrary/pdf');

const handleGetAllSingleUserCartProduct = asyncHandler(async(req, res, next)=>{
    
    const user__id = req.params.user__id; 
    const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, p.ID, c.ID as CID FROM products p LEFT JOIN cart c ON c.product__id=p.ID WHERE c.user__id='${user__id}'`;
            
    try {
        let result = await getAllJustProduct(count1);
            if(result.status__code === 200){ 
                res.json(result)
            }else{
                res.json({status__code: 201})
            }
    } catch (error) { 
        const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
    } 
})

const handleGetAllSingleUserCartProductAdPdfFormat = asyncHandler(async(req, res, next)=>{
    const user__id = req.params.user__id; 
    
    const count1 = `SELECT p.product__id, p.brand, p.child, p.parent, p.parent__father, p.infos, p.visible__url, p.total__sell, c.quantity, p.ID, c.ID as CID FROM products p LEFT JOIN cart c ON c.product__id=p.ID WHERE c.user__id='${user__id}'`;
            
    try {
        let result = await getAllJustProduct(count1);
        
            if(result.status__code === 200){
                let printDate = new Date().getTime();
                let pdfGenerateResult = await handlePdfGeneratorMaster(wishlistPdfHtmlString, {products: result.products, user__id: user__id, date: printDate}, options)
                if(pdfGenerateResult.status__code === 200){
                    res.download(`./${pdfGenerateResult.path}`,(err)=>{
                        if(!err){
                            if(pdfGenerateResult.status__code === 200){
                                fs.unlink(pdfGenerateResult.path, (err)=>{
                                    if(!err){
                                        // do something here
                                    }else{ 
                                        // do something here
                                    }
                                })
                            }
                        }
                    })
                }else{
                    const error1 = new Error(`There was a server side error!`);
                    error1.status = 500;
                    next(error1);
                }
            }
    } catch (error) {  
        const error1 = new Error(error.message);
            error1.status = 500;
            next(error1);
    } 
})

const handleGetSingleCartProduct = asyncHandler(async(req, res, next)=>{
    const {item__id} = req.params;
    if(item__id){
        let sql = `SELECT * FROM cart WHERE ID='${item__id}'`;
        try {
            let result = await getSingleSqlProduct(sql);
                res.json({product: result, status__code: 200})
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

const handleAddSingleCartProduct = asyncHandler(async(req, res, next)=>{
    let {quantity, product__id, user__id} = req.body;
    if(quantity && product__id && user__id){
        let sql = `SELECT * FROM cart WHERE product__id="${product__id}"`
        try {
            let result = await getAllJustSqlProduct(sql);
            
            if(result?.status__code === 200 && result?.items?.length > 0){
                res.status(500).json({message: 'This item already in cart!'})
                // let newError = new Error('This item already in cart!');
                // newError.status = 500;
                // next(newError);
            }else{
                let newError = new Error('There was a server side error!');
                newError.status = 500;
                next(newError);
            }
        } catch (error) {  
            if(error?.status__code === 204){
                let sql = `INSERT INTO cart (user__id, product__id, quantity) VALUES ("${user__id}","${product__id}","${quantity}")`;
                try {
                    let result = await addSingleSqlProduct(sql); 
                        if(result?.status__code === 201){ 
                            res.json({message: 'Successfully added to cart', status__code: 201});
                        }else{
                            res.status(500).json({message: 'There was a server side error', status__code: 500})
                        }
                } catch (error) { 
                    let newError = new Error(error?.message);
                    newError.status=500;
                    next(newError);
                }
            }else{ 
                let newError = new Error(error?.message);
                newError.status = 500;
                next(newError);
            } 
        } 
    }else{
        let newError = new Error('Invalid Server Request!');
        newError.status = 500;
        next(newError);
    }
})


const handleUpdateSingleCartProduct = asyncHandler(async(req, res, next)=>{
    const {item__id} = req.params; 
    let {quantity, product__id, user__id } = req.body;  
    
    if(quantity && product__id && user__id && item__id){
        let sql = `UPDATE cart SET quantity="${quantity}", product__id="${product__id}", user__id="${user__id}" WHERE product__id="${item__id}" AND user__id="${user__id}"`;
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
const handleDeleteSingleCartProduct = asyncHandler(async(req, res, next)=>{
    let {item__id} = req.params;
    if(item__id){
        let sql = `DELETE FROM cart WHERE ID="${item__id}"`;
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

const handleTransferToWishlist = asyncHandler(async(req, res, next)=>{
    let wishlistId = req.params.wishlist__id;
    
    if(wishlistId){
        let firstSql = `SELECT * FROM cart WHERE ID='${wishlistId}'`;
        try {
            let result = await getSingleSqlProduct(firstSql);
            if(result.status__code === 200){
                let {product__id, user__id, quantity} = result.item; 
                let secondSql = `INSERT INTO wishlist (user__id, product__id, quantity) VALUES ("${user__id}","${product__id}","${quantity}")`;
                try {
                    let result = await addSingleSqlProduct(secondSql);
                        if(result.status__code === 201){
                            let sql = `DELETE FROM cart WHERE ID="${wishlistId}"`;
                            try {
                                let result = await deleteSingleSqlProduct(sql);
                                    if(result.status__code === 200){
                                        res.json({message: 'Successfully moved to cart!', status__code: 200})
                                    }else{
                                        let newError = new Error(`There was a server side error`);
                                        newError.status=500;
                                        next(newError);
                                    }
                            } catch (error) {
                                let newError = new Error(error.message);
                                newError.status=500;
                                next(newError);
                            }
                        }else{
                            let newError = new Error(`There was a server side error`);
                            newError.status=500;
                            next(newError);
                        }
                } catch (error) {
                    let newError = new Error(error.message);
                    newError.status=500;
                    next(newError);
                }
            }else{
                let newError = new Error(`There was a server side error`);
                newError.status=500;
                next(newError);
            }
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
    handleGetAllSingleUserCartProduct,
    handleGetSingleCartProduct,
    handleAddSingleCartProduct,
    handleUpdateSingleCartProduct,
    handleTransferToWishlist,
    handleDeleteSingleCartProduct, 
    handleGetAllSingleUserCartProductAdPdfFormat
}